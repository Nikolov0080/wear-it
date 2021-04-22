
const axios = require('axios').default;

const pureToken = require('../../utils/pureToken');

export default function updateAddress(data) {

    return axios.post('http://localhost:5000/user/address', {
        ...data
    }, {
        headers: {
            auth: pureToken
        }
    }).catch(e => {
        console.log(e)
    })

}
