module.exports.makeOrderGET = (req, res) => {

    // check if single order
    // order data
    // user ID



    // add order data to completed orders
    // delete order from cart if it exists

    res.render('make-order')
}

module.exports.makeOrderPOST = (req, res) => {
    const errors = req.body.errors;
    if (errors) { return res.send(errors) }

    // not from the cart
    const isSingleOrder = req.body.hasOwnProperty("isSingle")
    console.log(isSingleOrder)
    // order data
    // user ID



    // add order data to completed orders
    // delete order from cart if it exists

    res.render('make-order')
}