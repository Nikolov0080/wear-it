import React from 'react'
import style from './css/cartItem.module.css';

const CartItem = ({ item, completeOrder, deleteOrder }) => {
    return (
        <div className={style.box}>
            <img className={style.image} src={item.imageURL} alt='clothes' />
            <div className={style.details}>
                <div className={style.info}>Name: {item.productName}</div>
                <div className={style.info}>Price: {item.price} USD</div>
                <div className={style.info}>Size: {item.size}</div>
            </div>

            {/* buttons below */}
            <div className={style.btnGroup}>
                <div onClick={() => completeOrder(item._id)} className={style.orderBtn}>Order</div>
                <div onClick={() => deleteOrder(item._id)} className={style.deleteBtn}>Remove</div>
            </div>
        </div>
    )
}

export default CartItem;