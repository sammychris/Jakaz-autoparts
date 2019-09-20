
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// serving static files...
app.use(express.static('client/build/'));


// import your route
require('./route/api')(app);


//serving all js data
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});


const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
