import React, { Component } from 'react'
import Context from './Context';
import getToken from '../utils/getToken';
import pureToken from '../utils/pureToken';
import getCart from '../controllers/cart/getCart';

export class UserContext extends Component {

    state = {
        user: '',
        cart: null,
        currentCategory: null,
        loading: true
    }

    componentDidMount() {

        if (document.cookie.includes("auth")) {
            getToken().then((userData) => {
                this.login(userData);
                this.setCart();
            })
        } else {
            this.logOut();
        }
    }

    componentDidUpdate() {
        if (this.state.user !== null && this.state.cart === null) {
            this.setCart();
        }
    }

    setCart = () => {
        pureToken().then((resp) => {
            if (resp) {
                getCart(resp).then((resp) => {
                    this.setState({
                        cart: resp
                    });
                });
            } else {
                this.setState({
                    cart: null
                });
            }
        })
    }

    login = (userData) => {
        this.setState({
            user: userData,
        });

    }

    logOut = () => {
        this.setState({
            user: null,
            cart: null
        });
    }

    setCategory = (category) => {
        this.setState({
            currentCategory: category,
        });
    }

    render() {

        if (this.state.user !== '') {
            // eslint-disable-next-line
            this.state.loading = false;
        }

        if (this.state.loading) {
            return (
                <div>
                    ...loading
                </div>
            )
        }

        return (
            <Context.Provider
                value={{
                    user: this.state.user,
                    cart: this.state.cart,
                    currentCategory: this.state.currentCategory,
                    login: this.login,
                    logOut: this.logOut,
                    setCategory: this.setCategory,
                    setCart: this.setCart
                }}
            >
                { this.props.children}
            </Context.Provider >
        )
    }
}

export default UserContext;