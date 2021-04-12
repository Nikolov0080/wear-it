import React, { Component } from 'react'
import ErrComponent from './errComponent';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            errData: ''
        }

    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {

        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <ErrComponent err="Home page" />
                </div>
            )
        }

        return this.props.children

    }
}

export default ErrorBoundary;