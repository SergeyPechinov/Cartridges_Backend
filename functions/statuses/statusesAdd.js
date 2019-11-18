const
		{clientDB} = require('../../database/client'),
		{namesTables} = require('../../constants/databaseTables');

module.exports = (req, res) => {
	const nameService = req.body.nameService;

	if (nameService.length >= 2) {
		const queryAddService = `\
			INSERT INTO ${namesTables.statuses}\
				(name)\
			VALUES
				('${nameService}');`;

		clientDB.query(queryAddService, (err, result) => {
			if (err) {
				res.status(400).json({
					message: 'Статус с таким именем уже есть!',
					success: false,
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
		});
	}

	// const
	// 		workerSurname = req.body.surname,
	// 		workerName = req.body.name,
	// 		workerPosition = req.body.position,
	// 		workerCabinet = req.body.cabinet;
	//
	// if (workerSurname.length > 1 &&
	// 		workerName.length > 1 &&
	// 		workerPosition.length > 0 &&
	// 		workerCabinet.length > 0) {
	// 	const queryAddWorker = `\
	// 	INSERT INTO ${namesTables.workers}\
	// 		(surname, name, position, cabinet)\
	// 	VALUES
	// 		('${workerSurname}', '${workerName}', '${workerPosition}', '${workerCabinet}');`;
	//
	// 	clientDB.query(queryAddWorker, (err, result) => {
	// 		if (err) { console.log(err) } else {
	// 			console.log('Работник добавлен!');
	// 			res.status(200).json({
	// 				success: true,
	// 			});
	// 		}
	// 	});
	// }
};