import React from 'react'
import style from './css/cartItem.module.css';
import completeOrder from '../../controllers/orders/completeOrder';
import deleteOrder from '../../controllers/orders/deleteOrder';
import ErrorBoundary from '../../errorBoundary/errorBoundary';

const CartItem = ({ item, token, update }) => {


    const complete = () => {
        completeOrder(item._id, token).then((resp) => {
            update(val => val + 2);
        })
    }

    const deleteOne = () => {
        deleteOrder(item._id, token).then((resp) => {
            update(val => val + 2);
        })
    }

    return (
        <div className={style.box}>
            <ErrorBoundary err="product error">
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
            </ErrorBoundary>
        </div>
    )
}

export default CartItem;