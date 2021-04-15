const axios = require('axios').default;

export default function completeOrder(orderId, token) {
    return axios.post("http://localhost:5000/products/single-order", {
        orderId
    }, {
        headers: {
            auth: token
        }
    }).then(resp => {
        return resp
    }).catch(e => {
        return e
    })
}
