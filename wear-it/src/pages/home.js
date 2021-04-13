import React, { Component } from 'react';
import HomeMenu from '../components/products/homeMenu';
import style from './css/homePage.module.css';
import ProductsList from '../components/products/productsList';
import Context from '../context/Context';
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class Home extends Component {

    static userContext = Context;

    state = {
        currentCategory: this.context.currentCategory
    }

    render() {

        return (
            <ErrorBoundary>
                <div className={style.row}>

                    <div className={style.col1}>

                        <HomeMenu />

                    </div>
                    <div className={style.col2}>
                        <ProductsList currentCategory={this.state.currentCategory} />
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}

Home.contextType = Context;

export default Home;