import React, { Component } from 'react'
import Details from '../components/products/productDetails/details'
import allProductsJSON from '../components/products/allProductsJSON';
import ErrorBoundary from '../errorBoundary/errorBoundary';

export class ProductDetails extends Component {


    constructor(props) {
        super(props)

        this.state = {
            product: this.getProd(props.match.params.productId)
        }

    }

    setProduct = (id) => {
        this.setState({
            product: this.getProd(id)
        })
    }

    getProd = (id) => {
        // eslint-disable-next-line
        return allProductsJSON.find((item) => {
            if (item.id === id) {
                return item
            } else {
                // throw new Error('Something went wrong... Product is missing')
            }
        }, {})
    }


    render() {
        return (
           <ErrorBoundary>

               <Details product={this.state.product} foo={this.setProduct} />
           </ErrorBoundary>
        )
    }
}

export default ProductDetails;