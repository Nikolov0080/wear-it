import React from 'react'
import style from './errorBoundary.module.css';

const ErrComponent = ({ err }) => {
    return (
        <div className={style.box}>
            <h1>Something went wrong</h1>
            <h1>At: {err}</h1>
        </div>
    )
}

export default ErrComponent;