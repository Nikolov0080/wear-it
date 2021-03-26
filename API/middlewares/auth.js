const jwt = require('../auth/JWT/index')

module.exports.auth = (req, res, next) => {

    if (req.cookies){
        console.log(jwt.decodeTokenL(req.cookies.auth))
        // finish auth middleware !!!
    }

        next()
}