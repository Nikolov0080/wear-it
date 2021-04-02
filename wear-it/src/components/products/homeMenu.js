import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context';
import style from '../../styles/homeMenu.module.css';

const HomeMenu = () => {
    // continue this with useReducer hook!!!
    const context = useContext(Context);

    const [categories, setCategories] = useState([
        { type: 'Hats', view: "inactive" },
        { type: 'Jeans', view: "inactive" },
        { type: 'Shirts', view: "inactive" },
        { type: 'Jackets', view: "inactive" }
    ]);

    const changeStyle = (index) => {

        categories.map((cat, i) => {
            if (i === index) {
                cat.view = "active";
            } else {
                cat.view = "inactive";
            }
            return categories;
        })

        console.log(categories)
        setCategories(categories)

    }

    return (
        <div>
            <div>
                {categories.map(({ type, view }, index) => {
                    return <div className={style[view]} onClick={() => changeStyle(index)} key={index} >{type}</div>
                })}
            </div>
        </div>
    )
}

export default HomeMenu;