const { userSchema } = require('../../../models/user');

const bcrypt = require('bcrypt');

// todo validations
module.exports.register = (req, res) => {
    const { username, email, password, rePassword } = req.body;

    // after validations !
    // else send error response !

    userSchema.create({ username, email, password }).then(resp => {
        console.log(resp);
        res.send("OK")
    }).catch(e => {
        console.log(e);
    })
}