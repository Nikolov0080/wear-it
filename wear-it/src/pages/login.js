import React, { Component } from 'react'
import LoginForm from '../components/user/login/loginForm'
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class Login extends Component {

    render() {
        return (
            <div>
                <ErrorBoundary err={'login page'}>
                    <LoginForm />
                </ErrorBoundary>
            </div>
        )
    }
}

export default Login;