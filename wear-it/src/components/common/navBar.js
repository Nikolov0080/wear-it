import React from 'react';
import HomeComponent from './homeComponent';
import LinkButton from './linkButton';
import linksList from './linksList';
import style from '../../styles/linkButton.module.css';

const NavBar = () => {
    return (
        <div className={style.navBox}>
            <HomeComponent />
            {linksList(false).map(({ name, path }, index) => {
                return <LinkButton key={index} name={name} path={path} />
            })}
        </div>
    )
}

export default NavBar;