import React, { Component } from 'react'
import CartComponent from '../components/cart/cartComponent';
import Context from '../context/Context';
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class Cart extends Component {

    render() {
        return (
            <ErrorBoundary err="Cart Page">
                <CartComponent />
            </ErrorBoundary>
        )
    }
}

export default Cart;