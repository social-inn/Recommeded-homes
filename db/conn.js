const mysql = require('mysql');
// const config = require('./config.js');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'more_homes'
});
// const connection = mysql.createConnection(config);
module.exports = connection;
