import React from 'react'
import { Link } from 'react-router-dom';
import style from '../../styles/linkButton.module.css';

const LinkButton = ({ name, path }) => {



    return (
        <div className={style.navBox}>

            <Link className={style.linkBtn} to={path} >{name}</Link>

        </div>
    )
}

export default LinkButton;