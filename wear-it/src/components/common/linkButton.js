import React from 'react'
import { Link } from 'react-router-dom';
import style from './css/linkButton.module.css';

const LinkButton = ({ name, path }) => {

    return (
        <div >

            <Link className={style.linkBtn} to={path} >{name}</Link>

        </div>
    )
}

export default LinkButton;