const
		express = require('express'),
		router = express.Router(),

		//FUNCTIONS
		{
			statusesGet,
			statusesAdd,
			statusesEdit,
			statusesDel,
		} = require('./../../functions/statuses/index');

router
		.get('/', (req, res) => {
			statusesGet(res);
		})
		.post('/', (req, res) => {
			statusesAdd(req, res);
		})
		.put('/', (req, res) => {
      statusesEdit(req, res);
		})
		.delete('/', (req, res) => {
			statusesDel(req, res);
		});

module.exports = router;