const axios = require('axios').default;

export default function addToCart(token, productId) {

    return axios.get("http://localhost:5000/products/add-to-cart", {
        headers: {
            auth: token
        }
    }).then(resp => {
        return resp.data
    }).catch(e => {
        return e
    })

}