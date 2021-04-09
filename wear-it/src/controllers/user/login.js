const axios = require('axios').default
const { createCookie } = require('../../utils/cookies').default;

export function loginController(username, password) {

    return axios.post("http://localhost:5000/user/login", {
        username,
        password
    }
    ).then((resp) => {
        const token = resp.data;

        if (resp.status === 202) {
            return resp;
        } else {
            createCookie(token);
        }
    })
        .catch((e) => {
            return e
        })

}