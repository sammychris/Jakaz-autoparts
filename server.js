
require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql2');



const app = express();


// app.get('/', function (req, res) {
// 	res.send('welcome sir')
// })

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// serving static files...
if (process.env.NODE_ENV === 'production') {
	console.log('production');
	app.use('/static', express.static(path.join(__dirname, 'client/build')));
} else console.log("Development!");

// import your route
require('./route/api')(app);

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
