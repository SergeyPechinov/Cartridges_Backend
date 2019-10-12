const
    express = require('express'),
    router = express.Router(),

    //FUNCTIONS
    {statusesGet} = require('./../../functions/statuses/index');

router
    .post('/', (req, res) => {
      statusesGet(res);
    });

module.exports = router;