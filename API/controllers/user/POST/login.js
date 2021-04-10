const { userSchema } = require('../../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../../../JWT/index');
const { COOKIE_NAME } = require('../../../config/index');

module.exports.login = (req, res) => {

    const { username, password } = req.body;
    if (req.body.errors) {

        return res.send(req.body.errors)
        //  for error visualization
        // return res.render('login', { errors: req.body.errors });

    } else {
        userSchema.findOne({ username }).then(resp => {
            if (resp) {
                bcrypt.compare(password, resp.password, (err, result) => {
                    if (err) {
                        req.status(202).send('wrong password');
                    }
                    if (result) {
                        const token = jwt.createToken({ user: resp });
                        res.cookie(COOKIE_NAME, token, { expires: new Date(Date.now() + 72 * 3600000), httpOnly: true })
                        res.send(token);
                    } else {
                        res.status(202).send('Wrong password!');
                    }
                })
            } else {
                res.status(202).send('No user found');
            }
        })
    }
}