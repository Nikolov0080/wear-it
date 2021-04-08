const axios = require('axios').default
const cookies = require('../../utils/cookies').default;

export default function registerController(username, email, password, rePassword) {

    return axios.post("http://localhost:5000/user/register", {
        username,
        email,
        password,
        rePassword
    }
    ).then((resp) => {
        const token = resp.data;

        if (resp.status !== 202) {
            return resp;
        } else {
            cookies(token);
        }
    })
        .catch(console.log)
}