const
		express = require('express'),
		router = express.Router(),

		//FUNCTIONS
		{workersGet} = require('./../../functions/workers/index');

router
		.post('/', (req, res) => {
			workersGet(res);
		});

module.exports = router;