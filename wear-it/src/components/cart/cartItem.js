import React from 'react'
import style from './css/cartItem.module.css';
import completeOrder from '../../controllers/orders/completeOrder';
import deleteOrder from '../../controllers/orders/deleteOrder';

const CartItem = ({ item, token }) => {


    const complete = () => {
        completeOrder(item._id, token).then(console.log)
    }

    const deleteOne = () => {
        deleteOrder(item._id, token).then(console.log)
    }

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
                <div onClick={() => complete()} className={style.orderBtn}>Order</div>
                <div onClick={() => deleteOne()} className={style.deleteBtn}>Remove</div>
            </div>
        </div>
    )
}

export default CartItem;