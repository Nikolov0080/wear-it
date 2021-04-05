import React, { useContext } from 'react'
import Context from '../../context/Context';
import MenuItem from './menuItem';
import style from './css/homeMenu.module.css';
import Landing from '../common/landing';

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

                <Landing user={context.user} />

                <div className={style.menuItemsBox}>
                    {categories.map(({ type }, index) => {
                        const className = type === context.currentCategory ? 'active' : 'inactive';
                        return <MenuItem key={index} className={className} index={index} type={type} foo={changeStyle} />
                    })}
                </div>

            </div>
        </div>
    )
}

export default HomeMenu;