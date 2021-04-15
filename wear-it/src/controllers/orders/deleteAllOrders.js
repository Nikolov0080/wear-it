const axios = require('axios').default;
// add user Id here
export default function deleteAllOrders( token) {
    return axios.delete("http://localhost:5000/products/cart", {
        headers: {
            auth: token
        }
    }).then(resp => {
        return resp
    }).catch(e => {
        return e
    })
}