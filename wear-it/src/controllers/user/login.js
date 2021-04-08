const axios = require('axios').default
const cookies = require('../../utils/cookies').default;

export function loginController(username, password) {

    return axios.post("http://localhost:5000/user/login", {
        username,
        password
    }
    ).then((resp) => {
        const token = resp.data;
        
        if (resp.status) {
            return resp;
        }else{
            cookies(token);
        }
    })
        .catch((e) => {
            return e
        })

}