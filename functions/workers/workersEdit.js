const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables'),
		validateLength = require('./common');

module.exports = (req, res) => {
	const
			id = req.body.id,
			surname = req.body.surname,
			name = req.body.name,
			position = req.body.position,
			cabinet = req.body.cabinet;

	if (validateLength(surname, name, position, cabinet, res)) {
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
				res.status(400).json({
					success: false,
					message: 'Произошла непредвиденная ошибка!',
				});
			} else {
				console.log('Работник обновлен!');
				res.status(200).json({
					success: true,
				});
			}
		});
	}
};