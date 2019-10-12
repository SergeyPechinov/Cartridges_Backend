const {namesTables} = require('../../constants/databaseTables');

module.exports = {
  query: `CREATE TABLE IF NOT EXISTS ${namesTables.cartridges_event} (\
        id SERIAL,\
        PRIMARY KEY(id),\
        name varchar(30) NOT NULL UNIQUE\
    );`,
  message_error: `Ошибка создания таблицы '${namesTables.cartridges_event}'`,
  message_success: `Таблица '${namesTables.cartridges_event}' создана`,
};