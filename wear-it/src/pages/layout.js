import React, { Component } from 'react';
import Footer from '../components/common/footer';
import NavBar from '../components/common/navBar/navBar';

import style from './css/layout.module.css';

export class Layout extends Component {

    render() {
        return (
            <div className={style.mainContainer}>
                <NavBar />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;