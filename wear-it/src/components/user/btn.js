import React from 'react'
import style from './css/btn.module.css';

const AuthButton = ({ value }) => {
    return (
        <div>
            <button type="submit" className={style.btn}>
                {value}
            </button>
        </div>
    )
}

export default AuthButton;