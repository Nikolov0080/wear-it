import React, { Component } from 'react'
import UserProfile from '../components/user/profile/userProfile';
import ErrorBoundary from '../errorBoundary/errorBoundary'

export class Profile extends Component {

    render() {
        return (
            <ErrorBoundary>
              <UserProfile />
            </ErrorBoundary>
        )
    }
}

export default Profile;