import React, { useContext, useEffect, useState } from 'react';
import HomeLink from './homeLink';
import NavLink from './navLink';
import linksList from './linksList';
import style from './css/navBar.module.css';
import Context from '../../context/Context';

const NavBar = () => {

    const context = useContext(Context);
    console.log(context);

    useEffect(() => {
        setIsAuth(!!context.user);
    }, [context]);

    const [isAuth, setIsAuth] = useState(!!context.user);

    return (
        <div className={style.navBox}>
            <HomeLink />
                {linksList(isAuth).map(({ name, path }, index) => {
                    return <NavLink key={index} name={name} path={path} />
                })}
        </div>
    )
}

export default NavBar;