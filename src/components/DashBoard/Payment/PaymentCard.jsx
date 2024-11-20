import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types'; // ES6
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// import { loadStripe } from '@stripe/stripe-js'
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
=======

>>>>>>> db7b544 (purchase coin successfully finished)

>>>>>>> 2ed9c7f (payment method left for later time)
=======
>>>>>>> 18c5b2a (fixed the purchase information)
import './PaymentCard.css'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import useInfo from '../../../Hooks/useInfo';
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 2ed9c7f (payment method left for later time)
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> db7b544 (purchase coin successfully finished)
const PaymentCard = ({ closeModal, price, coinNumber }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
<<<<<<< HEAD
<<<<<<< HEAD
    const navigate = useNavigate();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [role, , refetch] = useInfo();
=======
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [role] = useInfo();
>>>>>>> 2ed9c7f (payment method left for later time)
=======
    const navigate = useNavigate();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [role, , refetch] = useInfo();
>>>>>>> db7b544 (purchase coin successfully finished)
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        // fetch client secret
<<<<<<< HEAD
<<<<<<< HEAD
        if (price && price > 0) {
=======
        if (price && price > 1) {
>>>>>>> 2ed9c7f (payment method left for later time)
=======
        if (price && price > 0) {
>>>>>>> 18c5b2a (fixed the purchase information)
            getClientSecret({ price })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price])

    //   get clientSecret
    const getClientSecret = async price => {
<<<<<<< HEAD
<<<<<<< HEAD
        const { data } = await axiosSecure.post(`/create-payment-intent`, { price })
        setClientSecret(data.clientSecret)
        console.log(data.clientSecret);
    }
=======
        const { data } = await axiosSecure.post(`/create-payment-intent`, price)
        console.log('clientSecret from server--->', data)
        setClientSecret(data.clientSecret)
    }
    console.log(32, stripe)
    // console.log(33, clientSecret)
    // console.log(34, processing)

>>>>>>> 2ed9c7f (payment method left for later time)
=======
        const { data } = await axiosSecure.post(`/create-payment-intent`, { price })
        setClientSecret(data.clientSecret)
        console.log(data.clientSecret);
    }
>>>>>>> db7b544 (purchase coin successfully finished)

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
<<<<<<< HEAD
<<<<<<< HEAD
                date: new Date().toLocaleDateString(),
                email: user?.email,
<<<<<<< HEAD
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
=======
                date: new Date(),
=======
                date: new Date().toLocaleDateString(),
>>>>>>> db7b544 (purchase coin successfully finished)
=======
>>>>>>> 18c5b2a (fixed the purchase information)
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
<<<<<<< HEAD
>>>>>>> 2ed9c7f (payment method left for later time)
=======
                        navigate('/dashBoard/payment-history');
>>>>>>> db7b544 (purchase coin successfully finished)
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
<<<<<<< HEAD
<<<<<<< HEAD
                        Pay ${price}
=======
                        Pay {price}
>>>>>>> 2ed9c7f (payment method left for later time)
=======
                        Pay ${price}
>>>>>>> 18c5b2a (fixed the purchase information)
                    </button>
                    <button className='bg-orange-500 p-3 rounded-lg' onClick={() => closeModal()}>
                        cancel
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
<<<<<<< HEAD
<<<<<<< HEAD
            For information try this link <a className='btn btn-link' href="https://docs.stripe.com/testing" target='_blank'>click here</a>
=======
>>>>>>> 2ed9c7f (payment method left for later time)
=======
            For information try this link <a className='btn btn-link' href="https://docs.stripe.com/testing" target='_blank'>click here</a>
>>>>>>> 6e21f58 (main home page finished)
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