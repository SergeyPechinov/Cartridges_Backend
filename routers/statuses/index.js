const
    express = require('express'),
    router = express.Router(),

    //FUNCTIONS
    {statusesGet, statusesAdd} = require('./../../functions/statuses/index');

router
    .get('/', (req, res) => {
      statusesGet(res);
    })
    .post('/', (req, res) => {
      statusesAdd(req, res);
    });

module.exports = router;