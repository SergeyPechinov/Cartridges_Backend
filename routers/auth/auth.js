const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    jwt = require('jsonwebtoken'),
    {secretKeyAuth} = require('./../../constants/common'),
    {clientDB} = require('../../database/client'),
    {namesTables} = require('./../../constants/databaseTables');

function auth(req, res) {
  const usernameLength = req.body.username.length;
  const passwordLength = req.body.password.length;

  if (usernameLength > 5 && passwordLength > 5) {
    const queryAuth = `\
    SELECT * FROM\
      ${namesTables.users}\
    WHERE (\
      username='${req.body.username}'\
    AND\
      password='${req.body.password}'\
    );`;

    clientDB.query(queryAuth, (err, result) => {
      if (result.rows.length === 1) {
        passportAuth(req, res);
      } else {
        console.log('Пользователь с таким именем отсутствует'); //del
        res.status(400).send({message: 'Неверный логин или пароль.'});
      }
    });
  } else {
    res.status(400).json({
      message: 'Форма сломалась, Вы ввели менее 6 символов в логине или пароле',
    });
  }
}

//AUTH LOCAL
passport.use('local', new LocalStrategy('local',
    (username, password, done) => {
      return done(null, username, password);
    }
));

function passportAuth(req, res) {
  passport.authenticate('local', {session: false}, (err, username, password) => {
    req.login(username, {session: false}, (err) => {
      if (err) {
        res.send({message: 'error'});
      }
      let token = updateToken(username, password);
      return res.json({
        username: username,
        token: token,
      });
    });

  })(req, res);
}

function updateToken(username, password) {
  const
      token = jwt.sign({username}, secretKeyAuth),
      queryUpdateToken = `\
        UPDATE\
          ${namesTables.users}\
        SET\
          token='${token}'\
        WHERE (\
          username='${username}'\
        AND\
          password='${password}'\
        )`;

  clientDB.query(queryUpdateToken);
  return token;
}

module.exports = auth;