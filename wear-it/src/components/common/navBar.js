import React from 'react';
import HomeLink from './homeLink';
import NavLink from './navLink';
import linksList from './linksList';
import style from './css/navBar.module.css';

const NavBar = () => {
    return (
        <div className={style.navBox}>
            <HomeLink />
            {linksList(false).map(({ name, path }, index) => {
                return <NavLink key={index} name={name} path={path} />
            })}
        </div>
    )
}

export default NavBar;