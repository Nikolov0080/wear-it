import React from 'react';
import NavLink from './navLink';
import style from './css/homeLink.module.css';

const HomeLink = () => {
    return (
        <div className={style.homeBtn}>
            <NavLink name="Home" path="/" />
            {/* { new Error('sdkfj')} */}
        </div>
    )
}

export default HomeLink;