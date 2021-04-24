const axios = require('axios').default;

export default function updateAddress(data,token) {

    return axios.post('http://localhost:5000/user/address', {
        ...data
    }, {
        headers: {
            auth: token
        }
    }).catch(e => {
        console.log(e)
    })

}
