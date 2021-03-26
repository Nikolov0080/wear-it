const { userSchema } = require('../../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../../../auth/JWT/index');

module.exports.login = (req, res) => {

    const { username, password } = req.body;

    if (req.body.errors) {

        return res.send(req.body.errors)
        //  for error visualization
        // return res.render('login', { errors: req.body.errors });

    } else {

        userSchema.findOne({ username }).then(resp => {
            bcrypt.compare(password, resp.password).then((result) => {
                if (result) {

                    console.log(resp)
                    const token = jwt.createToken({ uid: resp });
                    res.cookie('auth', token, { expires: new Date(Date.now() + 900000), httpOnly: true })
                    res.redirect('/');
                }
            })
        })
    }
}