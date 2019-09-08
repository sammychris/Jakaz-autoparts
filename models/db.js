// get the client
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7304381',
  password: 'UNht4TWCiw',
  port: '3306',
  database: 'sql7304381'
});


connection.connect(function(err) {
  if (err) return console.error(err);
  console.log("Connected!");
});

module.exports = connection;
