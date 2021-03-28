const { cartSchema } = require('../../../models/cart');

module.exports.addToCartGET = (req, res) => {
    res.render('add-to-cart');
}

module.exports.addToCartPOST = (req, res) => {
    const errors = req.body.errors;
    if (errors) { return res.send(errors); }

    const { productName, price, size, imageURL } = req.body;

    const userId = req.user.user._id;

    const item = {
        productName,
        price,
        size,
        imageURL,
        userId
    }

    cartSchema.create(item).then((resp) => {
        return res.send(resp);
    })
}