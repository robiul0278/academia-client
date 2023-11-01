import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import './CheckoutForm.css'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import axios from 'axios';
import './CheckoutForm.css'
import Swal from "sweetalert2";

const CheckoutForm = ({ item ,price }) => {
    // console.log(price);
    // console.log(cart);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    // useEffect(() => {
    //     if (price > 0) {
    //         axiosSecure.post('/create-payment-intent', { price })
    //             .then(res => {
    //                 console.log(res.data)
    //                 setClientSecret(res.data.clientSecret);
    //             })
    //     }
    // }, [price, axiosSecure])

 useEffect(() => {
    axios.post('https://summer-camp-server-seven-pink.vercel.app/create-payment-intent',{
        price:price
    }).then(res=>setClientSecret(res.data.clientSecret))
 }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    transactionId: paymentIntent.id,
                    price,
                    date: new Date(),
                    status: "paid",
                    courseName: item.courseName,
                    instructor: item.instructor,
                    image: item.image,
                    // enrolled: setPoint(parseFloat)
            }
            console.log(payment);
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successful',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
                <button className="btn btn-primary btn-sm mt-4" type="submit"  disabled={!stripe || !clientSecret || processing} >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;