import React, { useState, useEffect, useContext } from 'react'
import allProductsJSON from '../allProductsJSON';
import getRandomProducts from '../../../utils/getRandomProducts';
import style from './css/details.module.css';
import SingleProduct from '../singleProduct';
import addToCart from '../../../controllers/cart/addToCart';
import pureToken from '../../../utils/pureToken';
import ErrMessage from '../../common/errMessage';
import Size from './size';
import { useHistory } from 'react-router-dom';
import Context from '../../../context/Context';
import ErrorBoundary from '../../../errorBoundary/errorBoundary';

const Details = ({ product, foo }) => { // foo === set current Product
    const context = useContext(Context);
    const history = useHistory();
    const [size, setSize] = useState('');
    const [err, setErr] = useState(false);

    const add = (data) => {
        if (size === '') {
            setErr("Select size please")
        } else {
            pureToken().then((token) => {
                const orderData = {
                    productName: data.name,
                    price: data.price,
                    size: size,
                    imageURL: data.imageURL
                }
                addToCart(token, orderData).then(resp => {
                    history.go(0)
                });
            })
        }
    }

    useEffect(() => {
        if (size !== '') {
            setErr(false);
        }
    }, [size]);

    return (
        <div>
            <ErrorBoundary err="details page">
                <div className={style.detailsBox}>

                    <div className={style.productImage}>
                        <img className={style.image} src={product.imageURL} alt="product" />
                    </div>
                    <div className={style.productInfo}>
                        {err !== false ? <ErrMessage err={err} /> : ''}
                        <h2 className={style.prodName}>{product.name}</h2>
                        
                        {context.user
                            ?
                            <Size foo={setSize} />
                            : ''
                        }

                        <p className={style.prodPrice}>{product.price} usd</p>
                        {!context.user?
                            <h3>You must be logged in to make an order</h3>
                            : <div className={style.btn} onClick={() => add(product)}>Add to cart</div>
                        }

                    </div>
                </div>
                <div className={style.randomProds}>
                    <h2 className={style.prodsTitle}>You may also like</h2>
                    {getRandomProducts(allProductsJSON, 3).map(({ price, imageURL, id, name }, index) => {
                        return (
                            <div className={style.prod} onClick={() => foo(id)} key={id.slice(0, 5)} >
                                <SingleProduct imageURL={imageURL} name={name} price={price} id={id} />
                            </div>
                        )
                    })}
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default Details;