import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context';
import SingleProduct from './singleProduct';
import allProductsJSON from './allProductsJSON';
import style from "../../styles/productsList.module.css";

const ProductsList = () => {

    const [currentProducts, setCurrentProducts] = useState([]);

    const context = useContext(Context);
    const currentCategory = context.currentCategory;
    useEffect(() => {

        if (!currentCategory) {
            setCurrentProducts(allProductsJSON.slice(5, 12))
        }
    }, [currentCategory])

    return (
        <div className={style.box}>
            {currentProducts.map(({ imageURL, name, price }, index) => {
                return (
                    <SingleProduct key={index} imageURL={imageURL} name={name} price={price} />
                )
            })}
        </div>
    )
}

export default ProductsList;