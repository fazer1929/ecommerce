import React from 'react'
import './CheckoutComponent.css'
import SubtotalComponent from '../SubtotalComponent/SubtotalComponent'
export default function CheckoutComponent() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className=".checkout__ad"
                src="" />
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                    </div>
             </div>
                    <div className="checkout__right">  
                        <SubtotalComponent/>
                    </div>
            
        </div>
    )
}
