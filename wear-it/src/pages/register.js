import React, { Component } from 'react'
import RegisterForm from '../components/user/registerForm'
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class Register extends Component {

    render() {
        return (
            <div>
                <ErrorBoundary err="register Page">
                    <RegisterForm />
                </ErrorBoundary>
            </div>
        )
    }
}

export default Register;