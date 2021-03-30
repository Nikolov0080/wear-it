import React, { Component } from 'react'

export class Layout extends Component {

    render() {
        return (
            <div>
                {/* add header and footer here */}
                {this.props.children}
            </div>
        )
    }
}

export default Layout;