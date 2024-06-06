import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types'; // ES6
// import { loadStripe } from '@stripe/stripe-js'
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

import './PaymentCard.css'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import useInfo from '../../../Hooks/useInfo';
const PaymentCard = ({ closeModal, price, coinNumber }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [role] = useInfo();
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        // fetch client secret
        if (price && price > 1) {
            getClientSecret({ price })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price])

    //   get clientSecret
    const getClientSecret = async price => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, price)
        console.log('clientSecret from server--->', data)
        setClientSecret(data.clientSecret)
    }
    console.log(32, stripe)
    // console.log(33, clientSecret)
    // console.log(34, processing)


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setProcessing(true);


        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error)
            setCardError(error.message)
            setProcessing(false)
            return
        } else {
            console.log('[PaymentMethod]', paymentMethod)
            setCardError('')
        }

        // confirm payment
        const { error: confirmError, paymentIntent } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                },
            })
        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }

        if (paymentIntent.status === 'succeeded') {
            toast.success("success")
            // Handle successful payment here
            const purchaseInfo = {
                coinNumber,
                price,
                transactionId: paymentIntent.id,
                date: new Date(),
            }
            closeModal();
            try {
                const { data } = await axiosSecure.post('/purchase-coin', purchaseInfo)
                if (data.insertedId) {
                    const newCoin = role?.coin + coinNumber;
                    const update = await axiosSecure.patch(`/user/${user?.email}`, { newCoin })
                    if (update.modifiedCount) {
                        toast.success('coin Purchase successful. Coin add in your profile')
                        closeModal();
                    }
                }
            } catch (err) {
                console.log(err);
                toast.error(err.message)
                closeModal();
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex justify-between gap-5'>
                    <button className='bg-lime-400 p-3 rounded-lg'
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}
                    >
                        Pay {price}
                    </button>
                    <button className='bg-orange-500 p-3 rounded-lg' onClick={() => closeModal()}>
                        cancel
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </>
    );
};

export default PaymentCard;
PaymentCard.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    price: PropTypes.number,
    coinNumber: PropTypes.number
}