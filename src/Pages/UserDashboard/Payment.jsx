import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../Hooks/useCart";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51NFd4fLH35tsgMVb77Nc1DcjENvI3hQzCauql7SNGlwJAK7yqDsftUEQA7FM3EJ5DURYoEVvHxU221Q6xs6XVrwI00j2kWhKjm');

// env formate not working
// const stripePromise = loadStripe(import.meta.env.Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    console.log(cart);
    let {id} = useParams();
    const item = cart.find(item => item._id === id);
    return (
        <div className="w-full p-16">
            <h2 className="text-3xl ml-10">Make Your Payments</h2>
             <Elements stripe={stripePromise}>
                    <CheckoutForm
                      item={item}  price={item?.price} 
                    />
                </Elements>
        </div>
    );
};

export default Payment;