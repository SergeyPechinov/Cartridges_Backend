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
			res.status(400).json({
				success: false,
				message: 'Данный работник где-то учтен, удалить не возоможно. Сначала почистите все связи с ним! Либо это ошибка сервера!',
			});
		} else {
			console.log('Работник удален!');
			res.status(200).json({
				success: true,
			});
		}
	});
};