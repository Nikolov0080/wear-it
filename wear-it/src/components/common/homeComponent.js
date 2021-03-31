import React from 'react'
import LinkButton from './linkButton'
import style from '../../styles/homeComponent.module.css';

const HomeComponent = () => {
    return (
        <div className={style.homeBtn}>
            <LinkButton name="Home" path="/" />
        </div>
    )
}

export default HomeComponent;