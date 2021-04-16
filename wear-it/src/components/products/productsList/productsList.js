import React, { useContext, useEffect, useState } from 'react'
import Context from '../../../context/Context';
import SingleProduct from '../singleProduct/singleProduct';
import allProductsJSON from '../allProductsJSON';
import style from "./productsList.module.css";
import ErrorBoundary from '../../../errorBoundary/errorBoundary';

const ProductsList = () => {

    const [currentProducts, setCurrentProducts] = useState([]);
    const context = useContext(Context);

    useEffect(() => {

        if (!context.currentCategory) {
            setCurrentProducts(allProductsJSON.slice(7, 17))
        } else {

            setCurrentProducts(
                allProductsJSON.reduce((acc, cVal) => {
                    if (cVal.type === context.currentCategory) {
                        acc.push(cVal);
                    }
                    return acc;
                }, [])
            );
        }

    }, [context.currentCategory]);


    return (
        <div className={style.box}>
            <ErrorBoundary err="product list">
               
                {currentProducts.map(({ id, imageURL, name, price }, index) => {
                    return (
                        <SingleProduct key={id.slice(0, 5) + index} imageURL={imageURL} id={id} name={name} price={price} />
                    )

                })}
            </ErrorBoundary>

        </div>
    )
}

export default ProductsList;