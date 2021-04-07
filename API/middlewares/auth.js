const jwt = require('../JWT/index');
const { COOKIE_NAME, SECRET } = require('../config/index')

module.exports = function () {
    return (req, res, next) => {

        let token = req.cookies[COOKIE_NAME];
        const headers = req.headers;
        console.log(headers)
        // fix for headers after

        if (token) {
            const decoded = jwt.decodeToken(token);

            req.user = decoded;
            res.locals.user = decoded;
            res.locals.isAuthenticated = true;
        }

        next();

    }
}
