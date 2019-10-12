const {namesTables} = require('../../constants/databaseTables');

module.exports = {
  query: `CREATE TABLE IF NOT EXISTS ${namesTables.users} (\
        id SERIAL,\
        PRIMARY KEY(id),\
        username varchar(30) NOT NULL UNIQUE,\
        password varchar(30) NOT NULL,\
        token varchar(150)\
    );`,
  message_error: `Ошибка создания таблицы '${namesTables.users}'`,
  message_success: `Таблица '${namesTables.users}' создана`,
};