import React from 'react'
import './ProductComponent.css'
import { useStateValue } from '../../StateProvider'

export default function ProductComponent({title,rating,imgs,price}) {
    const [{basket},dispatch] = useStateValue();

    const addToBasket =() =>{
    dispatch({
        type:"ADD_TO_BASKET",
        item:{
            id:1,
            title:title,
            image:imgs,
            price:price,
            rating:rating,
        },
    });
  }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"> 
                <small>$</small>
                <strong>{price}</strong> 
                </p>
                <div className="product__rating">
                   {Array(rating).fill().map((_,i) => (
                       <p>⭐</p>
                   ))}
                    
                </div>
                <img src={imgs} />
            
                <button onClick={addToBasket}>Add To Basket</button>
            </div>            
        </div>
    )
}
