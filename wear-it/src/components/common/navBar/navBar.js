import React, { useContext, useEffect, useState } from 'react';
import HomeLink from './homeLink/homeLink';
import NavLink from './navLink/navLink';
import linksList from './homeLink/linksList';
import style from './navBar.module.css';
import Context from '../../../context/Context';
import CartIcon from '../../cart/cartIcon';
import ErrorBoundary from '../../../errorBoundary/errorBoundary';

const NavBar = () => {

    const context = useContext(Context);

    useEffect(() => {
        setIsAuth(!!context.user);
    }, [context]);

    const [isAuth, setIsAuth] = useState(!!context.user);

    return (
        <ErrorBoundary err="nav bar">

            <div className={style.navBox}>
                <HomeLink />
                {linksList(isAuth).map(({ name, path }, index) => {
                    return <NavLink key={index} name={name} path={path} />
                })}

                {context.user !== null ? <CartIcon /> : ''}

            </div>
        </ErrorBoundary>
    )
}

export default NavBar;