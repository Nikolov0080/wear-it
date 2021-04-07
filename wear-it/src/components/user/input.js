import React from 'react'
import style from './css/input.module.css';

const Input = ({ type, name, placeholder, foo }) => {// add error here as PROP


    //   ADD VALIDATIONS !!!    
    return (
        <div>
            <input
                onChange={(e) => foo(e.target.value)}
                autoComplete="off"
                type={type}
                name={name}
                placeholder={placeholder}
                className={style.input} />

          

        </div>
    )
}

export default Input;