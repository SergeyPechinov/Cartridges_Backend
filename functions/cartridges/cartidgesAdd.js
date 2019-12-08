const
		{clientDB} = require('./../../database/client'),
		{namesTables} = require('./../../constants/databaseTables'),
		statusesGet = require('./../common/statusesGet'),
		workersGet = require('./../common/workersGet');

module.exports = async (req, res) => {
	const values = {
		id_worker: Number(req.body.id_worker),
		id_inv: req.body.id_inv,
		id_status: Number(req.body.id_status),
		mark: req.body.mark,
		model: req.body.model,
		dateLastFill: Date.parse(req.body.dateLastFill),
		datePurchase: Date.parse(req.body.datePurchase),
	};
	const
			workers = await workersGet(),
			statuses = await statusesGet();
	let
			tryWorker = false,
			tryStatus = false;

	for await (let worker of workers.rows) {
		if (worker.id === values.id_worker) {
			tryWorker = true;
			break;
		}
	}

	for await (let status of statuses.rows) {
		if (status.id === values.id_status) {
			tryStatus = true;
			break;
		}
	}

	if (
			values.id_worker !== -1 &&
			values.id_inv !== '' &&
			values.id_status !== -1 &&
			values.mark !== '' &&
			values.model !== ''
	) {
		if (tryWorker && tryStatus) {
			let queryAddCartridge = `\
		INSERT INTO ${namesTables.cartridges}\
			(id_inv, mark, model, statuses, count_refill, date_last_fill, date_purchase, workers)\
		VALUES\
			('${values.id_inv}', '${values.mark}', '${values.model}', '${values.id_status}', '${0}', '${values.dateLastFill}', '${values.datePurchase}', '${values.id_worker}');`;

			clientDB.query(queryAddCartridge, error => {
				if (error) {
					res.status(400).json({
						success: false,
						message: 'Проблема на сервере!',
					})
				} else {
					res.status(200).json({
						success: true,
					});
				}
			});
		} else {
			let message = '';

			if (tryWorker) {
				message = 'Такого работника не существует!';
			}

			if (tryStatus) {
				message = 'Такого статуса не существует!';
			}

			res.status(400).json({
				success: false,
				message: message,
			})
		}
	} else {

		let errorsStatus = {
			id_worker: values.id_worker === -1,
			id_inv: values.id_inv === '',
			id_status: values.id_status === -1,
			mark: values.mark === '',
			model: values.model === '',
		};

		res.status(400).json({
			success: false,
			message: errorsStatus,
		})
	}
};