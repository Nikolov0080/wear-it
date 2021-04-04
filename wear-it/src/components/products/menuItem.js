import React from 'react'
import style from './css/menuItem.module.css';

const MenuItem = ({ className, index, type, foo }) => { // foo === changeStyle function from parent component
    return (
        <div>
            <div className={style[className]} onClick={() => foo(index, type)} >{type}</div>
        </div>
    )
}

export default MenuItem
