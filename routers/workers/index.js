const
		express = require('express'),
		router = express.Router(),

		//FUNCTIONS
		{workersGet} = require('./../../functions/workers/index'),
		{workersAdd} = require('./../../functions/workers/index'),
		{workersDel} = require('./../../functions/workers/index'),
		{workersEdit} = require('./../../functions/workers/index');

router
		.get('/', (req, res) => {
			workersGet(res);
		})
		.post('/', (req, res) => {
			workersAdd(req, res);
		})
		.delete('/', (req, res) => {
			workersDel(req, res);
		})
		.put('/', (req, res) => {
			workersEdit(req, res);
		});

module.exports = router;