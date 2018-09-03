const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var request = require('request');2
var moment = require('moment');
const db = require('./db.js');

const appServer = express();
appServer.use(express.static(__dirname));
appServer.use('/scripts', express.static(
  path.join(__dirname, '..', 'node_modules')));

appServer.use(bodyParser.urlencoded({ extended: false }))
appServer.use(bodyParser.json())

appServer.post('/', (req, res) => {

  // console.log(`req into server`, req.body);

  if (req.body.result) {
    var data = {
      result: req.body.result,
      time: moment(req.body.time).format('dddd, YYYY MMMM D, h:mm:ss a')
    };
    db.save(null, data, function(err, total) {
      res.write(JSON.stringify(total));
      res.status(201).end();
    });
  } else if (req.body.cheat) {



  } else if (req.body.drop) {
    db.deleteHistory(null, function(err, newTotal) {
      if (err) {
        console.error(`server drop error: ${err}`);
        res.end();
      } else {
        res.status(201).end(JSON.stringify([]));
      }
    });
  } else {
    db.save(null, null, function(err, total) {
        res.write(JSON.stringify(total));
        res.status(201).end();
    });
  }
});

appServer.listen(8080, () => {
  console.log('Flip server listening on :8080')
});