import React, { useContext } from 'react'
import Context from '../../context/Context';
import style from '../../styles/homeMenu.module.css';

const HomeMenu = () => {
// continue this with useReducer hook!!!
    const context = useContext(Context);
    console.log(context);

    const categories = ['Hats', 'Jeans', 'Shirts', 'Jackets',];

    return (
        <div>
            <div>
                {categories.map((cat, index) => {
                    return <div key={index}></div>
                })}
            </div>

        </div>
    )
}

export default HomeMenu;