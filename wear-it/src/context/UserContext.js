import React, { Component } from 'react'
import Context from './Context';

export class UserContext extends Component {

    state = {
        user: null,
        cart: null,
        currentCategory: null
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