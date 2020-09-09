import React from 'react'
import './CheckoutComponent.css'
import SubtotalComponent from '../SubtotalComponent/SubtotalComponent'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
export default function CheckoutComponent() {
   const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className=".checkout__ad"
                src="" />
                    <div>
                        <h3>Hello, {user?.email} </h3>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket.map((item,i) =>(
                            <CheckoutProduct
                            id ={i}
                            title ={item.title}
                            image = {item.imgS}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        ))}
                    </div>
             </div>
                    <div className="checkout__right">  
                        <SubtotalComponent/>
                    </div>
            
        </div>
    )
}
