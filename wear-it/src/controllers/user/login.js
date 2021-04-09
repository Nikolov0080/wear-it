import jwt from '../../utils/JWT';

const axios = require('axios').default
const { createCookie } = require('../../utils/cookies').default;

export function loginController(username, password) {

    return axios.post("http://localhost:5000/user/login", {
        username,
        password
    }
    ).then((resp) => {

        if (resp.status === 202) {
            return resp;
        } else {
            createCookie(resp.data);
            return jwt.decodeToken(resp.data);
        }
    })
        .catch((e) => {
            return e
        })

}