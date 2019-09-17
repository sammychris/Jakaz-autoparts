// get the client
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
  host: 'sql2.freemysqlhosting.net',
  user: 'sql2305177',
  password: 'sP4%pX6!',
  port: '3306',
  database: 'sql2305177'
});


connection.connect(function(err) {
  if (err) return console.error(err);
  console.log("Connected!");
});

module.exports = connection;
