import React, { Component } from 'react';
import Footer from '../components/common/footer/footer';
import NavBar from '../components/common/navBar/navBar';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import style from './css/layout.module.css';

export class Layout extends Component {

    render() {

        return (
            <ErrorBoundary>
                <div className={style.mainContainer}>
                    <NavBar />
                    {this.props.children}
                    <Footer />
                </div>
            </ErrorBoundary>
        )
    }
}

export default Layout;