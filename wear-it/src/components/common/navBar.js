import React from 'react';
import HomeLink from './homeLink';
import LinkButton from './linkButton';
import linksList from './linksList';
import style from '../../styles/linkButton.module.css';

const NavBar = () => {
    return (
        <div className={style.navBox}>
            <HomeLink />
            {linksList(false).map(({ name, path }, index) => {
                return <LinkButton key={index} name={name} path={path} />
            })}
        </div>
    )
}

export default NavBar;