import React from 'react'
import './SubtotalComponent.css'
import CurrencyFormat from 'react-currency-format'
import { Button } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'
export default function SubtotalComponent() {
    const [state,dispatch] = useStateValue();
    let totalPrice = 0 ;
    state.basket.map(b =>{
        totalPrice += b["price"];
    })
    return (
        <div className="subtotal"> 
            <CurrencyFormat
            renderText={(value) => (
                <React.Fragment>
                    <p>
                        Subtotal ({state.basket?.length} items) : <strong>{totalPrice}</strong>
                    </p>
                    <small className="suntotal__gift">
                        <input type="checkbox"/>This Order Contains a Gift
                    </small>
                </React.Fragment>
            )}
            decimalScale={2}
            value={totalPrice}
            displayType = {"text"}
            thousandSeperator = {true}
            perfix="$"
            />
            <button>Proceed To Checkout</button>
        </div>
    );
}
