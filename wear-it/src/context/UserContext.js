import React, { Component } from 'react'
import Context from './Context';
import getToken from '../utils/getToken';
import pureToken from '../utils/pureToken';
import getCart from '../controllers/cart/getCart';
import Loading from '../components/common/loading';

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

    // componentDidUpdate() {
    //     if (this.state.user !== null && this.state.cart === null) {
    //         this.setCart();
    //     }
    // }

    setCart = () => {
        pureToken().then((resp) => {
            if (resp) {
                getCart(resp)
                    .then((resp) => {
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

    logOut = async () => {
        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        await this.setState({
            user: null,
            cart: null
        });

        return 'x'
    }

    setCategory = (category) => {
        this.setState({
            currentCategory: category,
        });
    }

    currentCart = (data) => {
        this.setCart()
        return this.state.cart;
    }

    render() {

        if (this.state.user !== '') {
            // eslint-disable-next-line
            this.state.loading = false;
        }

        if (this.state.loading) {
            return (
                <div>
                    <Loading />
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
                    setCart: this.setCart,
                    currentCart: this.currentCart
                }}
            >
                { this.props.children}
            </Context.Provider >
        )
    }
}

export default UserContext;