import jwt from 'jsonwebtoken';

export default {
    createToken: (data) => {
        jwt.sign(data, "meow");
    },
    decodeToken: (token) => {
        return jwt.decode(token);
    }
}