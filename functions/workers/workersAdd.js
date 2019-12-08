const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables'),
		validateLength = require('./common');

module.exports = (req, res) => {
	const
			surname = req.body.surname,
			name = req.body.name,
			position = req.body.position,
			cabinet = req.body.cabinet;

	if (validateLength(surname, name, position, cabinet, res)) {
		const queryAddWorker = `\
		INSERT INTO ${namesTables.workers}\
			(surname, name, position, cabinet)\
		VALUES
			('${surname}', '${name}', '${position}', '${cabinet}');`;

		clientDB.query(queryAddWorker, (err, result) => {
			if (err) {
				res.status(400).json({
					success: false,
					message: 'Произошла непредвиденная ошибка!',
				});
			} else {
				res.status(200).json({
					success: true,
				});
			}
		});
	}
};