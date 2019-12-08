module.exports = (surname, name, position, cabinet, res) => {
	if (surname.length > 1 &&
			name.length > 1 &&
			position.length > 0 &&
			cabinet.length > 0) {
		return true;
	} else {
		let errorsStatus = {
			surname: '',
			name: '',
			position: '',
			cabinet: '',
		};

		surname.length < 2 ? errorsStatus.surname = 'Минимум 2 символа!' : null;
		name.length < 2 ? errorsStatus.name = 'Минимум 2 символа!' : null;
		position.length < 1 ? errorsStatus.position = 'Минимум 1 символ!' : null;
		cabinet.length < 1 ? errorsStatus.cabinet = 'Минимум 1 символ!' : null;

		res.status(400).json({
			success: false,
			message: errorsStatus,
		});
		return false;
	}
};