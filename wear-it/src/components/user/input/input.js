import React from 'react'
import style from './input.module.css';

const Input = ({ type, name, placeholder, foo }) => {// add error here as PROP


    if(type === 'number'){
        return(
            <input
                autoComplete="off"
                type={type}
                name={name}
                onChange={(e) => foo(e.target.value)}
                placeholder={placeholder}
                className={style.inputNumber} />
        )
    }


    //   ADD VALIDATIONS !!!    
    return (
            <input
                autoComplete="off"
                type={type}
                name={name}
                onChange={(e) => foo(e.target.value)}
                placeholder={placeholder}
                className={style.input} />
    )
}

export default Input;