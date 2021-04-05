import React, { useContext } from 'react'
import Context from '../../context/Context';
import MenuItem from './menuItem';
import style from './css/homeMenu.module.css';

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
                {/* // take in a ne component/ */}
                <div className={style.pageInfo}>
                    <h1>Welcome to <i>wear-it</i> <br /> e-commerce </h1>
                    <span>
                        You can select category from the menu below, but you can
                       <span className={style.spanSpecial}> Add to cart </span>
                        and
                        <span className={style.spanSpecial}> order </span>
                        products only if you are registered user!
                   </span>
                    <br />

                    <span className={style.authSpan}>
                        Login
                       <br />
                       Register
                    </span>
                </div>
                {/* // take in a ne component/ */}


                {categories.map(({ type }, index) => {
                    const className = type === context.currentCategory ? 'active' : 'inactive';
                    return <MenuItem key={index} className={className} index={index} type={type} foo={changeStyle} />
                })}
            </div>
        </div>
    )
}

export default HomeMenu;