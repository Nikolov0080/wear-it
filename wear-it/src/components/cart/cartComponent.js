import React, { useEffect, useState } from 'react'
import getCart from '../../controllers/cart/getCart';
import pureToken from '../../utils/pureToken';
import CartItem from './cartItem';
import style from './css/cartComponent.module.css';

const CartComponent = (props) => {

    const [token, setToken] = useState();
    const [cart, setCart] = useState('empty');
    const [total, setTotal] = useState(0);

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
    }, [token])

    useEffect(() => {
        if (cart !== 'empty') {
            setTotal(cart.reduce((acc, cVal) => {
                acc += cVal.price
                return acc
            }, 0))
        }
    }, [cart]);


    if (cart === "empty") {
        return (
            <div>
                ... loading
                {/* FIX THIS WITH WELL STYLED COMPONENT! */}
            </div>
        )
    }

    if (cart === []) {
        return (
            <div>
                cart empty
                {/* FIX THIS WITH WELL STYLED COMPONENT! */}
            </div>
        )
    }

    return (
        <div>
            <h2 className={style.title}>My Cart</h2>
            <div className={style.cartBox}>
                {/* FIX THIS WITH WELL STYLED COMPONENT! */}
                {cart.map((item, index) => {
                    return <CartItem key={index} item={item}
                                            token={token}
                        />
                })}
            </div>
            <div className={style.total}>
                {total}
            </div>
        </div>
    )
}

export default CartComponent;