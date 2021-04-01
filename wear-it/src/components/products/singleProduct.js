import React from 'react'
import AddBtn from './addBtn';
import style from '../../styles/singleProduct.module.css';


const SingleProduct = ({ name, imageURL, price }) => {// price type name imageURL 
    return (
        <div>
            <div className={style.card}>
                <img className={style.image} alt="product" src={imageURL} />
                <div className={style.productInfo}>
                    <h4 className={style.productName}>{name}</h4>
                    <h3 className={style.productPrice}>{price} USD</h3>
                </div>
                <AddBtn />
            </div>
        </div>
    )
}

export default SingleProduct;