const {Client} = require('pg');
const {configDB} = require('./config');

module.exports = {
    clientDB: new Client(configDB),
};