import React, { Component } from 'react'
import CartComponent from '../components/cart/cartComponent';
import Context from '../context/Context';
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class Cart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '5'
        }

    }
    componentDidMount() {
        this.setState({
            userId: this.context.user
        })
    }

    componentDidUpdate(){
        if( this.state.userId !== this.context.user){
            this.setState({
                userId: this.context.user
            })
        }
        
    }
    static context = Context;





    // componentWillUnmount(){
    //     this.setState({
    //         userId: this.context.user
    //     })
    // }

    render() {
        console.log(this.state.userId)
        return (
            <ErrorBoundary err="Cart Page">
                <CartComponent />
            </ErrorBoundary>
        )
    }
}

Cart.contextType = Context;

export default Cart;