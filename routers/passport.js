const
    passportJWT = require('passport-jwt'),
    JWTStrategy = passportJWT.Strategy,
    ExtractJWT = passportJWT.ExtractJwt,
    {secretKeyAuth} = require('./../constants/common'),
    {namesTables} = require('./../constants/databaseTables'),
    {clientDB} = require('./../database/client');

const getUser = async user => {
  const query = `
    SELECT\
      username\
    FROM\
      ${namesTables.users}\
    WHERE\
      username='${user}'\
  ;`;

  const getClient = await clientDB.query(query);

  return getClient.rows[0].username;
};

module.exports = (passport) => {
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKeyAuth
  }, async (jwtPayload, done) => {
    const user = await getUser(jwtPayload.username);
    return done(null, user);
  }))
};
