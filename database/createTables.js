const
    {clientDB} = require('./client'),
    tableUsers = require('./tables/users'),
    tableWorkers = require('./tables/workers'),
    tableCartridges = require('./tables/cartridges'),
    tableStatuses = require('./tables/statuses'),
    tableCartridgesEvent = require('./tables/cartridges_event'),
    tableCartridgesHistory = require('./tables/cartridges_history');

function createTables() {
  //USERS
  clientDB.query(tableUsers.query, (err) => {
    if (err) {
      console.log(tableUsers.message_error);
    } else {
      console.log(tableUsers.message_success);
    }
  });

  //WORKERS
  clientDB.query(tableWorkers.query, (err) => {
    if (err) {
      console.log(tableWorkers.message_error);
    } else {
      console.log(tableWorkers.message_success);
    }
  });

  //STATUSES
  clientDB.query(tableStatuses.query, (err) => {
    if (err) {
      console.log(tableStatuses.message_error);
    } else {
      console.log(tableStatuses.message_success);
    }
  });

  //CARTRIDGES
  clientDB.query(tableCartridges.query, (err) => {
    if (err) {
      console.log(tableCartridges.message_error);
    } else {
      console.log(tableCartridges.message_success);
    }
  });

  //CARTRIDGES EVENT
  clientDB.query(tableCartridgesEvent.query, (err) => {
    if (err) {
      console.log(tableCartridgesEvent.message_error);
    } else {
      console.log(tableCartridgesEvent.message_success);
    }
  });

  //CARTRIDGES HISTORY
  clientDB.query(tableCartridgesHistory.query, (err) => {
    if (err) {
      console.log(tableCartridgesHistory.message_error);
    } else {
      console.log(tableCartridgesHistory.message_success);
    }
  });
}

module.exports = {
  createTables: createTables,
};