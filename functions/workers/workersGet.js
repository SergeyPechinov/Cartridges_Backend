module.exports = async res => {

	console.log(123);

	const
			workers = require('./../common/workersGet'),
			workersResult = await workers();

	res.json(workersResult.rows);
};