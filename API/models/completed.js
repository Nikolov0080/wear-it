const mongoose = require("mongoose");
const { Schema } = mongoose;

const completedOrdersSchema = new Schema({
    productName: { type: String, required: true },
    price: { type: String, required: true },
    size: { type: String, required: true },
    imageURL: { type: String, required: true },
    userId: (mongoose.Types.ObjectId)
});

module.exports.completedOrdersSchema = mongoose.model('completedOrders', completedOrdersSchema);