const
    {clientDB} = require('../../database/client'),
    {namesTables} = require('./../../constants/databaseTables');

function reg(req, res) {
  const usernameLength = req.body.username.length;
  const passwordLength = req.body.password.length;

  if (usernameLength > 5 && passwordLength > 5) {

    const queryReg = `\
    INSERT INTO ${namesTables.users}\
      (username, password)\
    VALUES\
      ('${req.body.username}', '${req.body.password}');`;

    clientDB.query(queryReg, (err, result) => {

      if (typeof result == 'undefined') {
        res.status(400).json({
          message: 'Пользователь с таким логином уже зарегестрирован.',
        })
      } else {
        res.json({
          success: true,
        });
      }
    });
  } else {
    res.status(400).json({
      message: 'Форма сломалась, Вы ввели менее 6 символов в логине или пароле',
    });
  }
}

module.exports = reg;