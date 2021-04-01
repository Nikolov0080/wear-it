import React from 'react'
import AddBtn from './addBtn';
import style from '../../styles/singleProduct.module.css';

const product = {
    type: "shirts",
    price: "45",
    name: 'dark fish',
    imageURL: 'https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/t-shirts/t_4_dvxny9.png'
}

const SingleProduct = () => {// price type imageURL
    return (
        <div>
            <div className={style.card}>

                <img className={style.image} alt="product" src={product.imageURL} />

                <div className={style.productInfo}>
                    <h4 className={style.productName}>{product.name}</h4>
                    <h3 className={style.productPrice}>{product.price} USD</h3>
                </div>
                <AddBtn />
            </div>

        </div>
    )
}

export default SingleProduct;