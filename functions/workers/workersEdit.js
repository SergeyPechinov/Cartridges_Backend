const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables');

module.exports = (req, res) => {
	const
			id = req.body.id,
			surname = req.body.surname,
			name = req.body.name,
			position = req.body.position,
			cabinet = req.body.cabinet;

	const queryUpdateWorker = `\
		UPDATE\
			${namesTables.workers}\
		SET\
			surname='${surname}',\
			name='${name}',\
			position='${position}',\
			cabinet='${cabinet}'\
		WHERE\
			id='${id}';`;

	clientDB.query(queryUpdateWorker, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Работник обновлен!');
			res.status(200).json({
				success: true,
			});
		}
	});
};