import React, { Component } from 'react'
import CartComponent from '../components/cart/cartComponent';
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class Cart extends Component {

constructor(props){
    super(props)

}

    render() {
        return (
            <ErrorBoundary err="Cart Page">
                <CartComponent />
            </ErrorBoundary>
        )
    }
}

export default Cart;