const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables');

module.exports = (req, res) => {
	console.log(req.body);
	const
			id = req.body.id,
			name = req.body.name;

	const queryUpdateStatus = `\
		UPDATE\
			${namesTables.statuses}\
		SET\
			name='${name}'\
		WHERE\
			id='${id}';`;
	if (name.length >= 2) {
		clientDB.query(queryUpdateStatus, (err) => {
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