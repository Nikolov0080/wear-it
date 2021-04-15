import React, { Component } from 'react'
import style from './css/errorPage.module.css';

export class errorPage extends Component {

    render() {
        return (
            <div className={style.notFound}>
                <h1>Wrong URL... Page not Found </h1>
             
                    <img className={style.image} src="https://res.cloudinary.com/recepsbg/image/upload/v1618499870/wear-it/404/404_arwyya.png" alt="404 cat" />

    
            </div>
        )
    }
}

export default errorPage;