import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types'; // ES6
import './PaymentCard.css'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import useInfo from '../../../Hooks/useInfo';
import { useNavigate } from 'react-router-dom';
const PaymentCard = ({ closeModal, price, coinNumber }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [role, , refetch] = useInfo();
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        // fetch client secret
        if (price && price > 0) {
            getClientSecret({ price })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price])

    //   get clientSecret
    const getClientSecret = async price => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, { price })
        setClientSecret(data.clientSecret)
        console.log(data.clientSecret);
    }

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
                date: new Date().toLocaleDateString(),
                email: user?.email,
            }
            console.log(purchaseInfo);
            // closeModal();

            try {
                const { data } = await axiosSecure.post('/purchase-coin', purchaseInfo)
                console.log(data);
                if (data.insertedId) {
                    const newCoin = role?.coin + coinNumber;
                    console.log(newCoin);
                    const update = await axiosSecure.patch(`/user/${user?.email}`, { newCoin })
                    console.log(update);
                    if (update.data.modifiedCount) {
                        toast.success('coin Purchase successful. Coin add in your profile')
                        refetch();
                        closeModal();
                        navigate('/dashBoard/payment-history');
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
                        Pay ${price}
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