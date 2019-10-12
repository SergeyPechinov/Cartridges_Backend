const
    express = require('express'),
    router = express.Router(),

    //FUNCTIONS
    {cartridgesGet} = require('./../../functions/cartridges/index');

router
    .post('/', (req, res) => {
      cartridgesGet(res);
    });

module.exports = router;