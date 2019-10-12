const
    {clientDB} = require('./../../database/client'),
    {namesTables} = require('./../../constants/databaseTables'),
    statusesGet = require('./../common/statusesGet'),
    workersGet = require('./../common/workersGet');


module.exports = (res) => {
  const
      queryCartridges = `\
        SELECT * FROM\
          ${namesTables.cartridges};`;

  clientDB.query(queryCartridges, async (error, result) => {
    if (error) {
      res.status(400);
    } else {

      const
          statuses = await statusesGet(),
          workers = await workersGet(),
          resultRows = result.rows,
          statusesRows = statuses.rows,
          workersRows = workers.rows;

      resultRows.forEach(itemRes => {
        //заменяем статус с id на значение
        statusesRows.forEach(itemStatus => {
          if (itemRes.statuses === itemStatus['id']) {
            itemRes.statuses = itemStatus['name'];
          }
        });

        //заменяем Кабинет с id на значение
        workersRows.forEach(itemWorker => {
          if (itemRes.workers === itemWorker['id']) {
            itemRes.surname = itemWorker['surname'];
            itemRes.name = itemWorker['name'];
            itemRes.position = itemWorker['position'];
            itemRes.cabinet = itemWorker['cabinet'];
          }
        });
      });

      res.json(resultRows);
    }
  });
};