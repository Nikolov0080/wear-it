import React from 'react'
import style from './css/order.module.css';

const Order = ({ data }) => {

    const {
        imageURL,
        price,
        productName,
        size,
    } = data
    return (
        <div>
            <div className={style.orderBox}>
                <img className={style.image} src={imageURL} alt="product" />
                <div className={style.productName}>Product name:  {productName}</div>
                <div className={style.size}>Size: {size}</div>
                <div className={style.price}>Price: {price} USD</div>
            </div>
        </div>
    )
}

export default Order;