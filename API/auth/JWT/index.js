const jwt = require('jsonwebtoken');
const config = require('../../config/index')
module.exports = {
    createToken: (data) => {
        return jwt.sign(data, config.SECRET);
    },
    decodeTokenL: (token) => {
        return jwt.decode(token);
    }
}