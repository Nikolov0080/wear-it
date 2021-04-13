import React, { Component } from 'react'
import ErrorBoundary from '../errorBoundary/errorBoundary'

export class Profile extends Component {

    render() {
        return (
            <ErrorBoundary>
                User Profile
            </ErrorBoundary>
        )
    }
}

export default Profile;