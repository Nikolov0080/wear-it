module.exports = checking = (req, res, next) => {

    req.check('addressLine', "address line must be at least 12 characters long")
        .isLength({ min: 12, max: 50 });

    req.check('city', "city must be at least 2 characters long")
        .isLength({ min: 2, max: 44 });

    req.check('postalCode', "postal code must be 4 characters long")
        .isLength({ min: 4, max: 12 });

    const errors = req.validationErrors();
    if (errors === false) {
        next();
    } else {
        req.body.errors = errors;
        next();
    }
}