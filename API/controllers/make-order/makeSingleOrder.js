const { completedOrdersSchema } = require('../../models/completed');
const { cartSchema } = require('../../models/cart');

module.exports.singleOrder = (req, res) => {

    const orderId = req.body.orderId

    // console.log(orderId);

    getOrder(orderId).then((order) => {
        addToCompleted(order).then((resp) => {
            deleteFromCart(orderId).then((resp) => {
                res.send('Completed!');
            })
        })
    })

}


function getOrder(_id) {
    return cartSchema.findOne({ _id }, (err, doc) => {
        return doc
    })
}

function addToCompleted(data) {

    const { productName, price, size, imageURL, userId } = data;



    return completedOrdersSchema
        .create({ productName, price, size, imageURL, userId })
}

function deleteFromCart(_id) {
    return cartSchema.deleteOne({ _id }, (err, doc) => {
        return doc
    })
}