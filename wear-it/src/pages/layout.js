import React, { Component } from 'react';
import NavBar from '../components/common/navBar/navBar';

export class Layout extends Component {

    render() {
        return (
            <div>
                {/* add auth results to navbar */}
                <NavBar />
                {this.props.children}
                {/*  NAV HERE */}
            </div>
        )
    }
}

export default Layout;