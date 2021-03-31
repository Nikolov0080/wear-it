import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Layout extends Component {

    render() {
        return (
            <div>
                
                {this.props.children}

                {/*  NAV HERE */}
            </div>
        )
    }
}

export default Layout;