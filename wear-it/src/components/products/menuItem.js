import React from 'react'
import style from './css/menuItem.module.css';

const MenuItem = ({ className, index, type, image, foo }) => { // foo === changeStyle function from parent component
    return (
        <div >
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
        </div>
    )
}

export default MenuItem;