const axios = require('axios').default;
// add user Id here
export default function completeOrder(token) {
    return axios.post("http://localhost:5000/products/make-order", {
        notSingle: 4
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
