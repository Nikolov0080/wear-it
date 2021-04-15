import React, { useEffect, useState } from 'react'
import style from './css/cartIcon.module.css';
import cartImage from './cartImage.png';
import { Link } from 'react-router-dom';
import getCart from '../../controllers/cart/getCart';
import pureToken from '../../utils/pureToken';

const CartIcon = (props) => {

    const [token, setToken] = useState();
    const [cart, setCart] = useState('empty');

    pureToken().then((resp) => {
        if (resp) {
            setToken(resp);
        }
    })

    useEffect(() => {
        if (token) {
            getCart(token)
                .then((resp) => {
                    setCart(resp);
                })
        }
    }, [token]);

    return (
        <div className={style.cartBox}>
            <Link to="/cart">
                <img className={style.cart} src={cartImage} alt="cart" />
            </Link>
            <div className={style.cartLabel}>my cart</div>
            <div className={style.cartItems}>{cart.length}</div>
        </div>
    )
}

export default CartIcon;