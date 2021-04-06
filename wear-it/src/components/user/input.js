import React from 'react'
import style from './css/input.module.css';

const Input = ({ type, name, placeholder, foo }) => {// add error here as PROP

    const error = false;
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

            {error !== false
                ?
                <div className={style.error}>
                    {/* {errorMessage} */}
                    {/* SET ERROR MESSAGE HERE */}
                ERROR TEST
            </div>
                :
                ''
            }

        </div>
    )
}

export default Input;