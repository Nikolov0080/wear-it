import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context';
import getCart from '../../controllers/cart/getCart';
import pureToken from '../../utils/pureToken';
import style from './css/cartComponent.module.css';

const CartComponent = () => {

    const [token, setToken] = useState();
    const [cart, setCart] = useState('empty');

    pureToken().then((resp) => {
        if (resp) {
            setToken(resp);
        }
    })

    const context = useContext(Context);

    useEffect(() => {
        if (token) {
            getCart(token)
                .then((resp) => {
                    setCart(resp)
                })
        }
    }, [token])


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
            {/* FIX THIS WITH WELL STYLED COMPONENT! */}
            {cart.map((item, index) => {
                return <p key={index} >{item.price}</p>
            })}
        </div>
    )


}

export default CartComponent
