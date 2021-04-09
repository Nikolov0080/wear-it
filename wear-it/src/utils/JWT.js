import jwt from 'jsonwebtoken';

const jwtFunctions = {
    createToken: (data) => {
        jwt.sign(data, "meow");
    },
    decodeToken: (token) => {
        return jwt.decode(token, 'meow', function (err, decoded) {
            if (err) { return err }
            return decoded
        })
    }
}

export default jwtFunctions;