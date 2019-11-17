const
    {clientDB} = require('./../../database/client'),
    {namesTables} = require('./../../constants/databaseTables');

module.exports = async () => {
  const queryStatuses = `\
    SELECT * FROM\
      ${namesTables.workers}
    ORDER BY ID DESC\;`;

  return await clientDB
      .query(queryStatuses)
      .then(result => {
        return result;
      });
};