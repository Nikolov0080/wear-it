import React from 'react'
import ErrorBoundary from '../../errorBoundary/errorBoundary';
import style from './css/menuItem.module.css';

const MenuItem = ({ className, index, type, image, foo }) => { // foo === changeStyle function from parent component
    return (
        <div >
            <ErrorBoundary err="menu item">
                <div className={style.categoryBox}
                    onClick={() => foo(index, type)}>

                    <div className={style.leftBoxCategory}>
                        <div className={style[className]}>
                            {type}
                        </div>
                    </div>

                    <div className={style.rightBoxImage}>
                        <img className={style.image} alt="category source" src={image} />
                    </div>
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default MenuItem;