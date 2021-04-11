import React from 'react'
import allProductsJSON from '../allProductsJSON';
import style from './css/details.module.css';

const Details = ({ productId }) => {

    // eslint-disable-next-line
    const currentProduct = allProductsJSON.find((item) => {
        if (item.id === productId) {
            return item
        } else {
            // throw new Error('Something went wrong... Product is missing')
        }
    }, {})
    console.log(currentProduct)
    return (
        <div>
            {JSON.stringify(currentProduct,null,null)}
        </div>
    )
}

export default Details;