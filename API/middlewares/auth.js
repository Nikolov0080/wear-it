const jwt = require('../JWT/index');
const { COOKIE_NAME, SECRET } = require('../config/index')

module.exports = function () {
    return (req, res, next) => {

        let token = req.cookies[COOKIE_NAME] || req.headers[COOKIE_NAME];

        console.log(token)

        if (token) {
            const decoded = jwt.decodeToken(token);
            req.user = decoded;
            res.locals.user = decoded;
            res.locals.isAuthenticated = true;
        }

        next();
    }
}
