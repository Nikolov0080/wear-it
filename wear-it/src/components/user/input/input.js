import React from 'react'
import style from './input.module.css';

const Input = ({ type, name, placeholder, foo }) => {// add error here as PROP


    if(type === 'number'){
        return(
            <div>
            <input
                onChange={(e) => foo(e.target.value)}
                autoComplete="off"
                type={type}
                name={name}
                placeholder={placeholder}
                className={style.inputNumber} />
        </div>
        )
    }


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