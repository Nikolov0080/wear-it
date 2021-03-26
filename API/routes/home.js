const express = require("express");
const router = express.Router();
const { home } = require('../controllers/home/index');
const { logout } = require('../controllers/user/GET/logout')
const { auth } = require('../middlewares/auth')
router.get('/',auth, home);
router.get('/logout', logout)

module.exports = router;