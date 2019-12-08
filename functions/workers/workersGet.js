module.exports = async res => {
	const
			workers = require('./../common/workersGet'),
			workersResult = await workers();

	res.json(workersResult.rows);
};