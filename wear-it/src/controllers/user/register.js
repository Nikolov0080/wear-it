const axios = require('axios').default
const cookieFunctions = require('../../utils/cookies').default;
const jwt = require("../../utils/JWT").default;

export default function registerController(username, email, password, rePassword) {

    return axios.post("http://localhost:5000/user/register", {
        username,
        email,
        password,
        rePassword
    }
    ).then((resp) => {
        const token = resp.data;

        if (resp.status === 202) {
            return resp;
        } else {
            cookieFunctions.createCookie(token);
            return jwt.decodeToken(resp.data).user;
        }
    }).catch((e) => {
        if (e) {
            return {
                status: 202,
                data: "Connection Error try agin later"
            }
        }
    })
        .catch(console.log)
}