const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('users');
});

router.get('/brunoborges', (req, res) => {
    res.send('Specific user');
});

module.exports = router;