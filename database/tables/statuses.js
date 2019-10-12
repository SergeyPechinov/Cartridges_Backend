const {namesTables} = require('../../constants/databaseTables');

module.exports = {
  query: `CREATE TABLE IF NOT EXISTS ${namesTables.statuses} (\
        id SERIAL,\
        PRIMARY KEY(id),\
        name varchar(30) NOT NULL UNIQUE\
    );`,
  message_error: `Ошибка создания таблицы '${namesTables.statuses}'`,
  message_success: `Таблица '${namesTables.statuses}' создана`,
};