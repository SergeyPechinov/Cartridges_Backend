const {namesTables} = require('../../constants/databaseTables');

module.exports = {
  query: `CREATE TABLE IF NOT EXISTS ${namesTables.cartridges_history} (\
        id SERIAL,\
        PRIMARY KEY(id),\
        date bigint NOT NULL,\
        ${namesTables.cartridges_event} smallint NOT NULL REFERENCES ${namesTables.cartridges_event} ON DELETE CASCADE\
    );`,
  message_error: `Ошибка создания таблицы '${namesTables.cartridges_history}'`,
  message_success: `Таблица '${namesTables.cartridges_history}' создана`,
};