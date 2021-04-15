const { completedOrdersSchema } = require('../../models/completed');
const { cartSchema } = require('../../models/cart');

const getCompleted = (userId) => {
    return completedOrdersSchema.find({ userId }).then((orders) => {
        return orders
    })
}

module.exports.orders = (req, res) => {
    const userId = req.user.user._id;

    getCompleted(userId).then((orders) => {
        return res.send(orders)
    }).catch((e) => {
        console.log(e)
        return res.send(e);
    })
}

module.exports.deleteOrder = (req, res) => {
    const _id = req.body.id
    cartSchema.deleteOne({ _id }).then(resp => {
        return res.send("Deleted!");
    })

}