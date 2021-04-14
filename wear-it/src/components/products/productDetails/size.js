import React, { useState } from 'react'
import style from './css/size.module.css';

const Size = ({ foo }) => { // foo === setSize

    const [select, setSelect] =
        useState([
            {
                status: 'inactive',
                value: "XS"
            }, {
                status: 'inactive',
                value: "S"
            }, {
                status: 'inactive',
                value: "M"
            }, {
                status: 'inactive',
                value: "XL"
            }, {
                status: 'inactive',
                value: "XXL"
            },
        ]);

    const setSize = (index) => {

        const newSelected = select.map((x, i) => {
            if (i === index) {
                x.status = 'active';
                foo(x.value);
            } else {
                x.status = 'inactive'
            }
            return x;
        }, []);

        setSelect(newSelected);
    }

    return (
        <div>
            <div className={style.selectBox}>
                {select.map((item, index) => {

                    return (
                            <div key={index} className={style[item.status]} onClick={() => setSize(index)} > {item.value}</div>
                    )
                })}
            </div>

        </div>
    )
}

export default Size;