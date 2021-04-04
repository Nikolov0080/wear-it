import React, { Component } from 'react';
import HomeMenu from '../components/products/homeMenu';
import style from './css/homePage.module.css';
import ProductsList from '../components/products/productsList';

export class Home extends Component {

    render() {
        return (
            <div>
                <div className={style.row}>

                    <div className={style.col1}>
                        <HomeMenu />
                    </div>
                    <div className={style.col2}>
                        <ProductsList />
                    </div>
                </div>


            </div>
        )
    }
}

export default Home;