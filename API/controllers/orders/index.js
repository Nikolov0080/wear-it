const { completedOrdersSchema } = require('../../models/completed');

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