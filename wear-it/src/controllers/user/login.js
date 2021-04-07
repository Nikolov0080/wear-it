const axios = require('axios').default
const cookies = require('../../utils/cookies').default;

export function loginController(username, password) {

    return axios.post("http://localhost:5000/user/login", {

        username,
        password

    }
        // ,{
        //     headers: {
        //         cosokie: "auth=kdlfsflsdkjf"
        //     }
        // }

    ).then((data) => {
        const token = data.data
        cookies(token);
    })
        .catch(console.log)

}