import React, { Component } from 'react'
import Context from './Context';

export class UserContext extends Component {

    state = {
        user: null,
        cart: null
    }

    login = (userData) => {
        this.setState({
            user: userData,
        })

    }

    logOut = () => {
        this.setState({
            user: null,
            cart: null
        })
    }

    render() {

        return (
            <Context.Provider
                value={{
                    user: this.state.user,
                    cart: this.state.cart,
                    login: this.login,
                    logOut: this.logOut

                }}
            >
                { this.props.children}
            </Context.Provider >
        )
    }
}

export default UserContext;