module.exports.singleOrderValidations = (req, res, next) => {

    req.check('productName', "must have a productName")
        .isLength({ min: 1 })

    req.check('price', "must have Price")
        .isLength({ min: 1 })

    req.check('size', "must have Size")
        .isLength({ min: 1 })

    req.check('imageURL', "must have imageURL")
        .isLength({ min: 1 });

    const errors = req.validationErrors();
    if (errors === false) {
        next();
    } else {
        req.body.errors = errors;
        next();
    }
}