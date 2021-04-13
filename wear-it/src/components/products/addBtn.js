import React from 'react'
import style from './css/addBtn.module.css';
import { Link } from 'react-router-dom';

const AddBtn = ({ title, path, auth, foo }) => { // foo === add to cart function

    if (auth) {
        return (
            <div as="div" onClick={foo} className={style.add}>
                {title}
            </div >
        )
    }

    return (
        <div>
            <Link className={style.link} to={path}>
                <div as="div" className={style.add}>
                    {title}
                </div >
            </Link>
        </div>
    )
}

export default AddBtn;