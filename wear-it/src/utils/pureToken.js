// getting the JWT token from the cookies 

const findAuth = (val) => {
    if (val.includes("auth=")) return val;
}

const getTokenData = async () => {

    if (document.cookie.includes('auth')) {
        const token = // getting the Auth toke out of cookies
            document.cookie
                .split('; ')
                .filter(findAuth)[0]
                .replace('auth=', '');


        return token;
    } else {
        return false
    }


}

export default getTokenData;