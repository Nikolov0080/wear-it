const jwt = require('jsonwebtoken');
const config = require('../config/index');

module.exports = {
    createToken: (data) => {
        return jwt.sign(data, config.SECRET);
    },
    decodeToken: (token) => {
        return jwt.decode(token);
    }
}