const { completedOrdersSchema } = require('../../models/completed');

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
    const { productName, price, size, imageURL } = req.body;
    const userId = req.user.user._id;
    const currentOrder = {
        productName, price, size, imageURL, userId
    }
    // not from the cart
    const isSingleOrder = req.body.hasOwnProperty("isSingle");

    if (isSingleOrder) {
        completedOrdersSchema.create(currentOrder).then((resp) => {
            console.log(resp);
        })
    }else{
        // remove order or orders from cart 
        // add order or orders into completed orders
    }



    // add order data to completed orders
    // delete order from cart if it exists

    res.render('make-order')
}