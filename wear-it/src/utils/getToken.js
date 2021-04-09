// getting the JWT token from the cookies 
import jwt from '../utils/JWT';

const findAuth = (val) => {
    if (val.includes("auth=")) return val;
}

const getTokenData = () => {
    const token = // getting the Auth toke out of cookies
        document.cookie
            .split('; ')
            .filter(findAuth)[0]
            .replace('auth=', '');

    const decodedToken = jwt.decodeToken(token).user;

    return decodedToken;
}

export default getTokenData;