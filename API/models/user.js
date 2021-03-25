const mongoose = require("mongoose");
const { Schema } = mongoose;
bcrypt = require('bcrypt');

saltRounds = 7;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    orders: { type: 'ObjectId', ref: 'orders' },
    completedOrders: { type: 'ObjectId', ref: 'completedOrders' }
});

userSchema.pre('save', function (next) { // hashing the plain-text password

    const user = this;

    if (this.isModified('password')) {
        bcrypt.hash(user.password, saltRounds, function (err, hash) {
            if (err) { next(err); return }
            user.password = hash;
            next()
        });
        return;
    }

    next();
})


module.exports.userSchema = mongoose.model('user', userSchema);