const {namesTables} = require('../../constants/databaseTables');

module.exports = {
  query: `CREATE TABLE IF NOT EXISTS ${namesTables.workers} (\
        id SERIAL,\
        PRIMARY KEY(id),\
        surname varchar(50) NOT NULL,\
        name varchar(30) NOT NULL,\
        position varchar(30) NOT NULL,\
        cabinet SMALLINT NOT NULL\
    );`,
  message_error: `Ошибка создания таблицы '${namesTables.workers}'`,
  message_success: `Таблица '${namesTables.workers}' создана`,
};