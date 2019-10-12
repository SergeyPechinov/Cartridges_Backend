const
    {clientDB} = require('./../../database/client'),
    {namesTables} = require('./../../constants/databaseTables');

module.exports = async () => {
  const queryStatuses = `\
    SELECT * FROM\
      ${namesTables.statuses};`;

  return await clientDB
      .query(queryStatuses)
      .then(result => {
        return result;
      });
};