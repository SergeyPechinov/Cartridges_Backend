const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables');

module.exports = (req, res) => {
	const id = req.body.id;

	const queryDelWorker = `\
		DELETE FROM\
			${namesTables.statuses}\
		WHERE\
			id='${id}';`;

	clientDB.query(queryDelWorker, (err) => {
		if (err) {
			res.status(400).json({
				success: false,
				message: 'Что бы удалить статус, нужно, что-бы он нигде не использовался!',
			});
		} else {
			console.log('Статус удален!');
			res.status(200).json({
				success: true,
			});
		}
	});
};