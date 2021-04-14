const axios = require('axios').default;

export default function addToCart(token, data) {


    console.log(token);
    console.log(data)

    return axios.post("http://localhost:5000/products/add-to-cart", {
        ...data
    },{
        headers: {
            auth: token
        }
    }).then(resp => {
        return resp.data
    }).catch(e => {
        return e
    })
}