import React from 'react'
import './HomeComponent.css'
import ProductComponent from '../ProductComponent/ProductComponent'
const HomeComponent = () =>{
    return(
        <div className="home">
            <div className="home_container">
                <img className="home__image" src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" />
            </div>

            <div className="home__row">
            <ProductComponent
            title="Harry Poter and Chamber of Secrets"
            rating={5}
            imgs="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg"
            price={5.00}
            />
            <ProductComponent
            title="Harry Poter and Goblet of Fire"
            rating={4}
            imgs="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg"
            price={4.50}
            />
            </div>
            <div className="home__row">
            <ProductComponent
            title="The Hitchhikers guide to galaxy"
            rating={3}
            imgs="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg"
            price={6.70}
            />
            <ProductComponent
            title="Harry Poter and Chamber of Secrets"
            rating={5}
            imgs=""
            price={5.00}
            />
            <ProductComponent
            title="Harry Poter and Chamber of Secrets"
            rating={5}
            imgs="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg"
            price={5.00}
            />
            </div>
            <div className="home__row">
            <ProductComponent/>

            </div>


        </div>
    )
}

export default HomeComponent;