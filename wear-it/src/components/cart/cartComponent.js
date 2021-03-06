import React, { useContext, useEffect, useState } from 'react'
import getCart from '../../controllers/cart/getCart';
import deleteAllOrders from '../../controllers/orders/deleteAllOrders';
import completeAllOrders from '../../controllers/orders/completeAllOrders';
import ErrorBoundary from '../../errorBoundary/errorBoundary';
import pureToken from '../../utils/pureToken';
import CartItem from './cartItem';
import { Link } from 'react-router-dom';
import style from './css/cartComponent.module.css';
import Loading from '../common/loading/loading';
import Context from '../../context/Context';

const CartComponent = () => {

    const context = useContext(Context);
    const [token, setToken] = useState();
    const [cart, setCart] = useState('empty');
    const [total, setTotal] = useState(0);
    const [update, setUpdate] = useState(0);

    useEffect(()=>{
        console.log(context.currentCart())
        if(context.currentCart() !== null){
            setCart(context.currentCart())
        }// eslint-disable-next-line
    },[update])

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
    }, [token, update])

    useEffect(() => {
        if (cart !== 'empty') {
            setTotal(cart.reduce((acc, cVal) => {
                acc += Number(cVal.price)
                return acc
            }, 0))
        }
    }, [cart, update]);


    const completeAll = () => {
        completeAllOrders(token).then((resp) => {
            console.log(resp);
            setUpdate(val => val + 2);
        })
    }

    const deleteAll = () => {
        deleteAllOrders(token).then((resp) => {
            console.log(resp);
            setUpdate(val => val + 2);
        })
    }

    if (cart === "empty") {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div>
            <ErrorBoundary err="Cart component">
                <h2 className={style.title}>My Cart</h2>
                <div className={style.cartBox}>
                    {/* FIX THIS WITH WELL STYLED COMPONENT! */}
                    {cart.map((item, index) => {
                        return <CartItem key={index} item={item}
                            update={setUpdate}
                            token={token}
                        />
                    })}
                </div>

                <div className={style.total}>
                    {cart.length !== 0 ?
                        <div>
                            <div className={style.totalPrice}>Total Price <br /> {total} USD</div>
                            <div onClick={() => completeAll()} className={style.orderBtn}>complete all</div>
                            <div onClick={() => deleteAll()} className={style.deleteBtn}>delete all</div>
                        </div>
                        :
                        <div className={style.noItems}>
                            Nothing in cart...
                        Make an order from <br />
                            <Link className={style.link} to='/'>
                                HERE
                        </Link>
                        </div>
                    }
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default CartComponent;