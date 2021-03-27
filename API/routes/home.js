const express = require("express");
const router = express.Router();
const { home } = require('../controllers/home/index');
const { logout } = require('../controllers/user/GET/logout');

router.get('/', home);
router.get('/logout', logout);

module.exports = router;