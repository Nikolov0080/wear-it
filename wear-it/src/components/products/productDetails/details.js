import React, { useState, useEffect } from 'react'
import allProductsJSON from '../allProductsJSON';
import getRandomProducts from '../../../utils/getRandomProducts';
import style from './css/details.module.css';
import SingleProduct from '../singleProduct';

const Details = ({ product, foo }) => { // foo === set current Product

    const addToCart = () => {
        console.log("sdkjfhsdkj")
    }

    return (
        <div>
            <div className={style.detailsBox}>

                <div className={style.productImage}>
                    <img className={style.image} src={product.imageURL} alt="product" />
                </div>
                <div className={style.productInfo}>
                    <h2 className={style.prodName}>{product.name}</h2>
                     sizes component here
                <p className={style.prodPrice}>{product.price} usd</p>

                    <div className={style.btn} onClick={addToCart}>Add to cart</div>
                </div>
            </div>
            <div className={style.randomProds}>
                <h2 className={style.prodsTitle}>You may also like</h2>
           
                {getRandomProducts(allProductsJSON, 3).map(({ price, imageURL, id, name }, index) => {

                    return (
                        <div className={style.prod} onClick={() => foo(id)} key={index} >
                            <SingleProduct imageURL={imageURL} name={name} price={price} id={id} />
                        </div>
                    )

                })}
            </div>
        </div>

    )
}



export default Details;