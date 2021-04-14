import React, { useContext, useEffect, useState } from 'react'
// import Context from '../../context/Context';
import getCart from '../../controllers/cart/getCart';
import pureToken from '../../utils/pureToken';
import CartItem from './cartItem';
import style from './css/cartComponent.module.css';


const CartComponent = (props) => {

    const [token, setToken] = useState();
    const [cart, setCart] = useState('empty');

    pureToken().then((resp) => {
        if (resp) {
            setToken(resp);
        }
    })

    // const context = useContext(Context);

    useEffect(() => {
        if (token) {
            getCart(token)
                .then((resp) => {
                    setCart(resp);
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
        <div className={style.cartBox}>
            {/* FIX THIS WITH WELL STYLED COMPONENT! */}
            {cart.map((item, index) => {
                return <CartItem key={index} item={item} />
            })}
        </div>
    )


}

export default CartComponent;