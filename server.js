
require('dotenv').config();
const express    = require('express');
// get the client
const mysql = require('mysql2');
//const mongoose   = require('mongoose');
const app = express();


app.get('/', function (req, res) {
	res.send('welcome sir')
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));



// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DB, {useNewUrlParser: true});

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// import your route
require('./route/api')(app);

//var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('connected! to DB')
// });

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
