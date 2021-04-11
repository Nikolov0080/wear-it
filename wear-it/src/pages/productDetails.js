import React, { Component } from 'react'
import Details from '../components/products/productDetails/details'

export class ProductDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.match.params.productId
        }

    }

    render() {
        return (
            <div>
                <Details productId={this.state.id} />
            </div>
        )
    }
}

export default ProductDetails;