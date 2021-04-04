import React from 'react'
import LinkButton from './linkButton'
import style from './css/homeLink.module.css';

const HomeLink = () => {
    return (
        <div className={style.homeBtn}>
            <LinkButton name="Home" path="/" />
        </div>
    )
}

export default HomeLink;