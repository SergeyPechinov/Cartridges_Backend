const
    express = require('express'),
    router = express.Router(),
    auth = require('./auth'),
    reg = require('./reg');

router
    .post('/login', auth)
    .post('/reg', reg);

module.exports = router;