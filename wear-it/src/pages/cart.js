import React, { Component } from 'react'
import CartComponent from '../components/cart/cartComponent';
import Context from '../context/Context';
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class Cart extends Component {

    static context = Context;

    render() {
        return (
            <ErrorBoundary err="Cart Page">
                <CartComponent />
            </ErrorBoundary>
        )
    }
}

Cart.contextType = Context;

export default Cart;