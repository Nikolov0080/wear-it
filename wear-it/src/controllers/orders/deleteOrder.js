const axios = require('axios').default;

export default function deleteOrder(id, token) {

    return axios.post("http://localhost:5000/products/delete-order", {
        id
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

