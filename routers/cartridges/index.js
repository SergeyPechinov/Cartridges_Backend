const
    express = require('express'),
    router = express.Router(),

    //FUNCTIONS
    {cartridgesGet, cartridgesAdd} = require('./../../functions/cartridges/index');

router
    .get('/', (req, res) => {
      cartridgesGet(res);
    })
    .post('/', (req, res) => {
      cartridgesAdd(req, res);
    });

module.exports = router;