
module.exports = checking = (req, res, next) => {
    req.check('username', "username must be 6 to 20 characters long")
        .isLength({ min: 6, max: 16 });

    req.check('password', "password must be 6 to 20 characters long")
        .isLength({ min: 6, max: 16 });

    const errors = req.validationErrors();
    if (errors === false) {
        next();
    } else {
        req.body.errors = errors;
        next();
    }
}