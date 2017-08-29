const express = require('express');

const router = express.Router();

router.get('/test',(req, res, next) => {
    res.send('success');
});


module.exports = router;
