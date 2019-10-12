const
    express = require('express'),
    {clientDB} = require('./database/client'),
    app = express(),
    bodyParser = require('body-parser'),
    routerProtect = require('./routers/passport'),
    passport = require('passport'),
    cors = require('cors');

//HEADERS
// app.use((request, response, next) => {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   response.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
//   next();
// });
app.use(cors());

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTERS
app.use(require('./routers/index'));

//ROUTER PROTECT
routerProtect(passport);

//SETTINGS ARE SERVER
const port = 4000;

//SETTING CREATE TABLES
const {createTables} = require('./database/createTables');

//START SERVER
const server = app.listen(port, (error) => {
  if (error)
    return console.log(`Error ${error}`);
  else {
    console.log(`Server start in '${server.address().port}' port!`);
    clientDB.connect();
    createTables();
    // clientDB.query(`insert into workers(surname, name) VALUES('tanya', 'prekrasna')`, (err, result) => {
    //   console.log(result.rows);
    // });
    // clientDB.query(`insert into cartridges(mark, model, id_workers) VALUES('samseunf', 'qwe', 3)`, (err, result) => {
    //   console.log(result.rows);
    // });
    // clientDB.query('select * from cartridges', (err, result) => {
    //   console.log(result.rows);
    // });
  }
});