import React from 'react'
import style from './css/input.module.css';

const Input = ({ type, name, placeholder, foo, err }) => {// add error here as PROP


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

            {err !== false
                ?
                <div className={style.err}>
                    {/* {errorMessage} */}
                    {/* SET ERROR MESSAGE HERE */}
                    {err}
                </div>
                :
                ''
            }

        </div>
    )
}

export default Input;