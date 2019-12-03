const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables');

module.exports = (req, res) => {
	const
			workerSurname = req.body.surname,
			workerName = req.body.name,
			workerPosition = req.body.position,
			workerCabinet = req.body.cabinet;

	console.log(workerSurname.length)

	if (workerSurname.length > 1 &&
			workerName.length > 1 &&
			workerPosition.length > 0 &&
			workerCabinet.length > 0) {
		const queryAddWorker = `\
		INSERT INTO ${namesTables.workers}\
			(surname, name, position, cabinet)\
		VALUES
			('${workerSurname}', '${workerName}', '${workerPosition}', '${workerCabinet}');`;

		clientDB.query(queryAddWorker, (err, result) => {
			if (err) {
				// console.log(err)
			} else {
				// console.log('Работник добавлен!');
				res.status(200).json({
					success: true,
				});
			}
		});
	} else {
		let errorsStatus = {
			surname: '',
			name: '',
			position: '',
			cabinet: '',
		};

		workerSurname.length < 2 ? errorsStatus.surname = 'Минимум 2 символа!' : null;
		workerName.length < 2 ? errorsStatus.name = 'Минимум 2 символа!' : null;
		workerPosition.length < 1 ? errorsStatus.position = 'Минимум 1 символ!' : null;
		workerCabinet.length < 1 ? errorsStatus.cabinet = 'Минимум 1 символ!' : null;

		res.status(400).json({
			success: false,
			message: errorsStatus,
		});
	}
};