import React from 'react'
import './OrderComp.css'
import moment from 'moment'
import CheckoutProduct from '../components/CheckoutProduct/CheckoutProduct'


function OrderComp({order}) {
    return (
        <div className="orderComp"> 
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </p>            
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                rating ={item.rating}
                imgs={item.image}
                price={item.price}
                />
            ))}
        </div>

    )
}

 export default OrderComp
