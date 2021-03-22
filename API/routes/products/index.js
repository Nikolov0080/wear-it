const express = require("express");
const router = express.Router();

router.get('/all', (req, res) => {
    res.send('test products')
});

router.get('/make-order', (req, res) => {
    res.send('test Make Order GET');
});

router.get('/get-orders', (req, res) => {
    res.send('test Get Orders GET');
});

router.post('/add-to-cart', (req, res) => {
    res.send('test Cart POST');
});

router.post('/make-order', (req, res) => {
    res.send('test Make Order POST');
});

module.exports = router;