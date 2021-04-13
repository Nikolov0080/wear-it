import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AddBtn from './addBtn';
import Context from '../../context/Context';
import style from './css/singleProduct.module.css';

const SingleProduct = ({ name, imageURL, price, id }) => {// price type name imageURL id

    const context = useContext(Context);
    const user = context.user;

    const addToCart = () => {
        // add ADD TO CART FUNCTIONALITY HERE
        console.log(context.user)
    }

    return (
        <div>
            <div className={style.card}>
                <Link to={`/details/${name}/${id}`}>
                    <img className={style.image} alt="product" src={imageURL} />
                </Link>
                <div className={style.productInfo}>
                    <h4 className={style.productName}>{name}</h4>
                    <h3 className={style.productPrice}>{price} USD</h3>
                </div>
                {user !== null
                    // ADD FOO HERE TODO 
                    ? <AddBtn title="add to cart" foo={addToCart} auth={true} />
                    : <AddBtn title="details" path={`/details/${name}/${id}`} auth={false} />
                }



            </div>
        </div>
    )
}

export default SingleProduct;