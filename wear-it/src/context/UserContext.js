import React, { Component } from 'react'
import Context from './Context';
import getToken from '../utils/getToken';

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
            })
        } else {
            this.logOut();
        }
    }

    // componentDidUpdate() {
    //     if (this.state.user === '') {
    //         if (document.cookie.includes("auth")) {
    //             getToken().then((userData) => {
    //                 this.login(userData);
    //             })
    //         } else {
    //             this.logOut();
    //         }
    //     }

    // }

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
                    setCategory: this.setCategory
                }}
            >
                { this.props.children}
            </Context.Provider >
        )
    }
}

export default UserContext;