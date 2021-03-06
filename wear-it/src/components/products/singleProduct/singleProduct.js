import React from 'react'
import { Link } from 'react-router-dom';
import ErrorBoundary from '../../../errorBoundary/errorBoundary';
import AddBtn from '../addBtn/addBtn';
import style from './singleProduct.module.css';

const SingleProduct = ({ name, imageURL, price, id }) => {// price type name imageURL id

    return (
        <div>
            <ErrorBoundary err="single product">
                <div className={style.card}>
                    <Link to={`/details/${name}/${id}`}>
                        <img className={style.image} alt="product" src={imageURL} />
                    </Link>
                    <div className={style.productInfo}>
                        <h4 className={style.productName}>{name}</h4>
                        <h3 className={style.productPrice}>{price} USD</h3>
                    </div>
                    {/* {new Error("dkf")} */}
                    <AddBtn title="details" path={`/details/${name}/${id}`} auth={false} />
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default SingleProduct;