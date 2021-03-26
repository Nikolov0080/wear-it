const { userSchema } = require('../../../models/user');
const jwt = require('../../../auth/JWT/index');

module.exports.register = (req, res) => {
    const { username, email, password, rePassword } = req.body;
    const errors = req.body.errors;

    if (errors) {
        return res.send(errors)
        // for error visualization
        // res.render('register', { errors: errors })
    } else {

        userSchema.create({ username, email, password }).then(resp => {
            const token = jwt.createToken({ uid: resp._id });
            res.cookie('auth', token, { expires: new Date(Date.now() + 900000), httpOnly: true })
            res.redirect('/');
        }).catch(e => {
            console.log(e);
        });
    }
}