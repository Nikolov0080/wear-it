import React from 'react';
import NavLink from '../navLink/navLink';
import style from './homeLink.module.css';

const HomeLink = () => {
    return (
        <div className={style.homeBtn}>
            <NavLink name="Home" path="/" />
            {/* { new Error('sdkfj')} */}
        </div>
    )
}

export default HomeLink;