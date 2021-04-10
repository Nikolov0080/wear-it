import React from 'react'
import style from './css/linkButton.module.css';
import { Link } from 'react-router-dom';

const LinkButton = ({ path, value }) => {
    return (
        <Link className={style.linkBtn} to={path}>
            <div className={style.btn}>
                {value}
            </div>
        </Link>
    )
}

export default LinkButton;