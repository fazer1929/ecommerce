import React from 'react'
import './CheckoutComponent.css'
import SubtotalComponent from '../SubtotalComponent/SubtotalComponent'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import FlipMove from 'react-flip-move'
export default function CheckoutComponent() {
   const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className=".checkout__ad"
                src="" />
                    <div>
                        <h3>Hello, {user? user.email:"Guest"} </h3>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* <FlipMove> */}
                            {
                                basket.map((item,i)=>(
                                    <CheckoutProduct
                                        key={i}
                                        id={item["id"]}
                                        title = {item["title"]}
                                        rating={item["rating"]}
                                        imgs={item["image"]}
                                        price={item["price"]}
                                    />
                                    )
                                )
                            }
                        {/* </FlipMove> */}
                    </div>
             </div>
                    <div className="checkout__right">  
                        <SubtotalComponent/>
                    </div>
            
        </div>
    )
}
