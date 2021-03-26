module.exports = checking = (req, res, next) => {
    req.check('username', "username must be 6 to 20 characters long")
        .isLength({ min: 5, max: 20 });

    req.check('password', "password must be 6 to 20 characters long")
        .isLength({ min: 5, max: 20 });

    req.check('password', "password and rePassword must match").equals(req.body.rePassword, "password and rePassword must match");
    req.check('email', "email is invalid").isEmail();

    const errors = req.validationErrors();
    if (errors === false) {
        next()
    } else {
        req.body.errors = errors;
        next()
    }
}