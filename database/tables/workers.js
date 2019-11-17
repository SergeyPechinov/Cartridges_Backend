const {namesTables} = require('../../constants/databaseTables');

module.exports = {
  query: `CREATE TABLE IF NOT EXISTS ${namesTables.workers} (\
        id SERIAL,\
        PRIMARY KEY(id),\
        surname varchar(25) NOT NULL,\
        name varchar(25) NOT NULL,\
        position varchar(30) NOT NULL,\
        cabinet varchar(5) NOT NULL\
    );`,
  message_error: `Ошибка создания таблицы '${namesTables.workers}'`,
  message_success: `Таблица '${namesTables.workers}' создана`,
};
