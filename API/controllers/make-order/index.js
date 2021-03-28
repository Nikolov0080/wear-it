const { completedOrdersSchema } = require('../../models/completed');
const { cartSchema } = require('../../models/cart');

module.exports.makeOrderGET = (req, res) => {

    res.render('make-order')
}

module.exports.makeOrderPOST = (req, res) => {
    const errors = req.body.errors;
    if (errors) { return res.send(errors) }
    const userId = req.user.user._id;
    // not from the cart
    const isSingleOrder = req.body.hasOwnProperty("isSingle");

    if (isSingleOrder) {

        const { productName, price, size, imageURL } = req.body;

        const currentOrder = {
            productName, price, size, imageURL, userId
        }

        completedOrdersSchema.create(currentOrder).then((resp) => {
            console.log(resp);
            return res.send(resp);
        }).catch((e) => {
            console.log(e);
            return e;
        })
    } else {
// finish this callback hell!!!
        getUserCart(userId).then((resp)=>{
            return resp
        }).then((console.log))
    }
}

function getUserCart(userId) {
    return cartSchema.find({ userId }).then((resp) => {
        return resp;
    }).catch((e) => {
        return res.send(e);
    })
}

function deleteFromCart(userId) {
    return cartSchema.deleteMany({ userId }).then((resp) => {
        return resp;
    }).catch((e) => {
        return res.send(e);
    })
}