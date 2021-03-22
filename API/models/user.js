const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    orders: { type: 'ObjectId', ref: 'orders' },
    completedOrders: { type: 'ObjectId', ref: 'completedOrders' }
});

module.exports.userSchema = mongoose.model('user', userSchema);