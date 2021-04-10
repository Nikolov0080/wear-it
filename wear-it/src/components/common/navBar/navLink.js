import React from 'react'
import { Link } from 'react-router-dom';
import style from './css/navLink.module.css';

const NavLink = ({ name, path }) => {

    return (
        <div className={style.box}>
            <Link className={style.linkBtn} to={path} >{name}</Link>
        </div>
    )
}

export default NavLink;