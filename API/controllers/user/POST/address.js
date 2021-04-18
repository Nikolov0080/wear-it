const { userSchema } = require('../../../models/user');

module.exports.address = (req, res) => {

    const errors = req.body.errors;

    if (errors) {
        return res.status(401).send(errors);
    }

    const _id = req.user.user._id;

    const address = req.body;

    findUser(_id).then((user) => {

        updateUser(_id, user, address)
    })

}


function findUser(_id) {
    return userSchema.findOne({ _id }).catch((e) => {
        res.status(401).send('something went wrong')
    });
}

function updateUser(_id, userData, address) {

    userData.address = address;

    return userSchema.findOneAndUpdate({ _id }, userData).catch((e) => {
        res.status(401).send('something went wrong')
    });
}
