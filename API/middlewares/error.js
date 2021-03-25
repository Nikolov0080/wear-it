const router = require('express').Router();

router.get('*', (req, res) => {
   
    res.status(404).render('404',{err:"Page not found"})
});

module.exports = router