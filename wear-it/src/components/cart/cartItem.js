import React from 'react'
import style from './css/cartItem.module.css';

const CartItem = ({ item }) => {
    console.log(item)
    return (
        <div className={style.box}>
            <img className={style.image} src={item.imageURL} alt='clothes' />

            <div className={style.info}>{item.productName}</div>
        </div>
    )
}

export default CartItem;