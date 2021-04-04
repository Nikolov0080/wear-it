import React, { useContext, useState } from 'react'
import Context from '../../context/Context';
import MenuItem from './menuItem';

const HomeMenu = ({ currentCategory }) => {
  
    const context = useContext(Context);

    const categories = [
        { type: 'Hats', view: "inactive" },
        { type: 'Jeans', view: "inactive" },
        { type: 'Shirts', view: "inactive" },
        { type: 'Jackets', view: "inactive" }
    ];

    const changeStyle = (index, type) => {
        context.setCategory(type);
    }

    return (
        <div>
            <div>

                {categories.map(({ type }, index) => {
                    const className = type === context.currentCategory ? 'active' : 'inactive';
                    return <MenuItem key={index} className={className} index={index} type={type} foo={changeStyle} />
                })}
            </div>
        </div>
    )
}

export default HomeMenu;