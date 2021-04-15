const axios = require('axios').default;

export default function completeOrder(token) {
    return axios.get("http://localhost:5000/products/orders",  {
        headers: {
            auth: token
        }
    }).then(resp => {
        return resp
    }).catch(e => {
        return e
    })
}