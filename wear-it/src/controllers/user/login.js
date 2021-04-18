import jwtFunctions from '../../utils/JWT';

const axios = require('axios').default
const { createCookie } = require('../../utils/cookies').default;

export function loginController(username, password) {

    return axios.post("http://localhost:5000/user/login", {
        username,
        password
    }
    ).then((resp) => {

        console.log(resp)

        if (resp.status === 202) {
            return resp;
        } else {
            createCookie(resp.data);
            return jwtFunctions.decodeToken(resp.data);
        }
    })
        .catch((e) => {
            if(e){
                return {
                    status:202,
                    data:"Connection Error try agin later"
                }
            }
        })

}