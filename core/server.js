const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var moment = require('moment');
moment().format();
const db = require('./db.js');

const appServer = express();
appServer.use(express.static(__dirname));
appServer.use('/scripts', express.static(
  path.join(__dirname, '..', 'node_modules')));

appServer.use(bodyParser.urlencoded({ extended: false }))
appServer.use(bodyParser.json())

appServer.get('/', (req, res) => {
  db.retrieving(function(err, data) {
    if (err) {
      console.error(`server retrieve error ${err}`);
    } else {
      console.log('server GET processed');
    }
  });
  res.status(200).end();
});

var unique = 0;

appServer.post('/', (req, res) => {
  // console.log(req.body);
  // var string = 'Tead'; //+ unique;
  // unique += 1;
  var data = {
    result: req.body.result,
    time: moment(req.body.time).format('dddd, YYYY MMMM D, h:mm:ss a')
  };
  console.log(data);
  db.save(null, data, function(err, data) {
    if (err) {
      console.error(`server save error ${err}`);
    } else {
      console.log('server POST processed');
    }
  });
  res.status(201).end();
});








appServer.listen(8080, () => {
  console.log('Flip server listening on :8080')
});