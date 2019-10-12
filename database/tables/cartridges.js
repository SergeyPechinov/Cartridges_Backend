const {namesTables} = require('../../constants/databaseTables');

module.exports = {
  query: `CREATE TABLE IF NOT EXISTS ${namesTables.cartridges} (\
        id SERIAL,\
        PRIMARY KEY(id),\
        id_inv varchar NOT NULL,\
        mark varchar(30) NOT NULL,\
        model varchar(30) NOT NULL,\
        ${namesTables.statuses} smallint NOT NULL REFERENCES ${namesTables.statuses} ON DELETE CASCADE,\
        count_refill smallint NOT NULL default 0,\
        date_last_fill bigint NOT NULL,\
        date_purchase bigint NOT NULL,\
        ${namesTables.workers} smallint NOT NULL REFERENCES ${namesTables.workers} ON DELETE CASCADE\
    );`,
  message_error: `Ошибка создания таблицы '${namesTables.cartridges}'`,
  message_success: `Таблица '${namesTables.cartridges}' создана`,
};