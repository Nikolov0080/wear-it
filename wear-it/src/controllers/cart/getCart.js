const axios = require('axios').default;

export default function getCart (token) {
    
    return axios.get("http://localhost:5000/products/cart", {
        headers: {
            auth: token
        }
    }).then(resp => {
        return resp.data
    }).catch(e => {
        return e
    })

}