
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const history = require('connect-history-api-fallback');

const app = express();
// app.get('/', function (req, res) {
// 	res.send('welcome sir')
// })

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(history());


// serving static files...
if (process.env.NODE_ENV === 'production') {
	console.log('Production environment!');
	app.use(express.static('client/build'));
} else { console.log('Development environment!')}

// import your route
require('./route/api')(app);

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
