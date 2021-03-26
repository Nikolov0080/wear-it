const { userSchema } = require('../../../models/user');
const bcrypt = require('bcrypt');

module.exports.login = (req, res) => {

    const { username, password } = req.body;

    userSchema.findOne({ username }).then(resp => {


    })

    // after validations
    // else send error response !


    res.send("OK");

}