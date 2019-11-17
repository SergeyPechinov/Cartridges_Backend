const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables');

module.exports = (req, res) => {
	const id = req.body.id;

	const queryDelWorker = `\
		DELETE FROM\
			${namesTables.workers}\
		WHERE\
			id='${id}';`;

	clientDB.query(queryDelWorker, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Работник удален!');
			res.status(200).json({
				success: true,
			});
		}
	});
};