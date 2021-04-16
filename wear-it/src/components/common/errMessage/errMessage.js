import React from 'react'
import style from './errMessage.module.css';

const ErrMessage = ({err}) => {
    return (
        <div className={style.errBox}>
            <p>{err}</p>
        </div>
    )
}

export default ErrMessage;