import React, { useContext } from 'react'
import style from './css/cartIcon.module.css';
import cart from './cart.png';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

const CartIcon = () => {

    const context = useContext(Context);

    return (
        <div className={style.cartBox}>
            <Link to="/cart">
                <img className={style.cart} src={cart} alt="cart" />
            </Link>
            <div className={style.cartLabel}>my cart</div>
            <div className={style.cartItems}>0</div>
        </div>
    )
}

export default CartIcon;