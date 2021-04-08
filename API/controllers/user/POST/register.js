const { userSchema } = require('../../../models/user');
const jwt = require('../../../JWT/index');
const { COOKIE_NAME } = require('../../../config/index');

module.exports.register = (req, res) => {
    const { username, email, password, rePassword } = req.body;
    const errors = req.body.errors;

    if (errors) {
        return res.send(errors)
        // for error visualization
        // res.render('register', { errors: errors })
    } else {

        userSchema.create({ username, email, password }).then(resp => {
            const token = jwt.createToken({ user: resp });
            res.cookie(COOKIE_NAME, token, { expires: new Date(Date.now() + 72 * 3600000), httpOnly: true })
            res.send(token);
        }).catch(e => {
            console.log(e);
            res.status(202).send(e.message);
        });
    }
}