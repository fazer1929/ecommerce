import React, { useState,useEffect } from 'react'
import './CheckoutPayment.css'
import {db} from '../../firebase'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import {CardElement,useStripe, useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';


function CheckoutPayment() {
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [{basket,user},dispatch] = useStateValue();
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(false);
    const [processing,setProcessing] = useState(false);
    const [succeeded,setSucceeded] = useState(false);
    const [clientSecret,setClientSecret] = useState(true);
 
    
    
    let totalPrice = 0 ;
    basket.map(b =>{
        totalPrice += b["price"];
    })


    useEffect(() => {
        const getClientSecret = async () => {
            const response= await axios({
                method: 'post',
                url: `http://localhost:5001/e-commerce-39de8/us-central1/api/payments/create?total=${totalPrice * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        console.log(clientSecret)
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);
        try{
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

              
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }
    catch(err){

        console.log(err)
        db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(Date())
              .set({
                  basket: basket,
                  amount: totalPrice,
                  created: Date(),
              })

              
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
    }


    }

    const handleChange= e =>{

        setDisabled(e.empty);
        setError(e.error ? e.message : " ")
    }


 
 


    return (
        <div className="payment">
            <div className="payment__container">
                {/* Payment Section - dilevery address */}
                <h1>
                    Checkout (
                        {/* <Link to="/checkout">{basket?.length items}</Link> */}
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?user.email:"Guest"}</p>
                        <p>43,Privet Drive</p>
                        <p>The Wizarding World</p>
                    </div>
                </div>

                {/* Payment Section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map((items,i) => (
                            <CheckoutProduct
                            key={i}
                            id = {items.id}
                            title = {items.title}
                            imgs={items.image}
                            price={items.price}
                            rating={items.rating}
                            />
                            ) )

                        }
                    </div>
                </div>

                {/* Payment Section - Payment Method */}
            
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Details</h3>
                    </div>
                    <div className="payment__details">

                       <form onSubmit={handleSubmit}>
                           <CardElement onChange={handleChange} /> 
                     
                            <div className="payment__priceContainer">
                            <CurrencyFormat
            renderText={(value) => (
                <React.Fragment>
                    <h3>
                        Order Total: {value}
                    </h3>
                </React.Fragment>
            )}
            decimalScale={2}
            value={totalPrice}
            displayType = {"text"}
            thousandSeperator = {true}
            perfix={"$"}
            />
            <button disabled={processing || disabled || succeeded}>
            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
                            </div>

                            {error && <div>{error}</div>}
                       </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CheckoutPayment
