import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context';
import style from './css/homeMenu.module.css';

const HomeMenu = () => {
    // continue this with useReducer hook!!!
    const context = useContext(Context);

    const [categories, setCategories] = useState([
        { type: 'Hats', view: "inactive" },
        { type: 'Jeans', view: "inactive" },
        { type: 'Shirts', view: "inactive" },
        { type: 'Jackets', view: "inactive" }
    ]);

    useEffect(() => {

    }, [])

    const changeStyle = () => {
        context.currentCategory = 'test'
    }

    console.log(context.currentCategory)


    return (
        <div>
            <div>
                {categories.map(({ type, view }, index) => {

                    return <div onClick={() => changeStyle(index)} key={index} >{type}</div>
                })}
            </div>
        </div>
    )
}

export default HomeMenu;