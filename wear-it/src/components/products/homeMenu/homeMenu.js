import React, { useContext } from 'react'
import Context from '../../../context/Context';
import MenuItem from '../menuItem/menuItem';
import style from './homeMenu.module.css';
import Landing from '../../common/landing/landing';
import ErrorBoundary from '../../../errorBoundary/errorBoundary';

const HomeMenu = ({ currentCategory }) => {

    const context = useContext(Context);

    const categories = [
        { type: 'Hats', view: "inactive", image: "https://res.cloudinary.com/recepsbg/image/upload/v1617635376/vECTORS/hat2_sirpfj.png" },
        { type: 'Jeans', view: "inactive", image: "https://res.cloudinary.com/recepsbg/image/upload/v1617635376/vECTORS/jeans1_j4su6t.png" },
        { type: 'Shirts', view: "inactive", image: "https://res.cloudinary.com/recepsbg/image/upload/v1617635376/vECTORS/shirt2_ajmris.png" },
        { type: 'Jackets', view: "inactive", image: "https://res.cloudinary.com/recepsbg/image/upload/v1617635376/vECTORS/jacket2_lkxfdt.png" }
    ];

    const changeStyle = (index, type) => {
        context.setCategory(type);
    }

    // throw new Error('Test Error');

    return (
        <div>
            <ErrorBoundary err="home menu">
                <div>

                    <Landing user={context.user} />

                    <div className={style.menuItemsBox}>
                        {categories.map(({ type, image }, index) => {
                            const className = type === context.currentCategory ? 'active' : 'inactive';
                            return <MenuItem key={index} className={className} index={index} type={type} image={image} foo={changeStyle} />
                        })}
                    </div>

                </div>
            </ErrorBoundary>

        </div>
    )
}

export default HomeMenu;