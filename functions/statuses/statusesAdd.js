const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables');

module.exports = (req, res) => {
	const nameService = req.body.value;

	if (nameService.length >= 2) {
		const queryAddService = `\
			INSERT INTO ${namesTables.statuses}\
				(name)\
			VALUES
				('${nameService}');`;

		clientDB.query(queryAddService, (err, result) => {
			if (err) {
				res.status(400).json({
					success: false,
					message: 'Статус с таким названием уже есть!',
				});
			} else {
				res.status(200).json({
					success: true,
				});
			}
		});
	} else {
		res.status(400).json({
			success: false,
			message: 'Минимум 2 символа!',
		});
	}
};