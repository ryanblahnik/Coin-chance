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
  if (req.body.result) {
    var data = {
      result: req.body.result,
      time: moment(req.body.time).format('dddd, YYYY MMMM D, h:mm:ss a')
    };
    // console.log(data);
    db.save(null, data, function(err, total) {
      // if (err) {
      //   console.error(`server save error ${err}`);
      // } else {
      //   // console.log('server POST processed');
        // console.log('server data ', total);
        // console.log('server data ', JSON.stringify(total));
        res.write(JSON.stringify(total));
        res.status(201).end();
      // }
    });
  } else {
    db.save(null, null, function(err, total) {
      // if (err) {
      //   console.error(`server save error ${err}`);
      // } else {
      //   // console.log('server POST processed');
        // console.log('server data ', total);
        // console.log('server data ', JSON.stringify(total));
        res.write(JSON.stringify(total));
        res.status(201).end();
      // }
    });
  }
  // res.status(201).end();
});

// appServer.get('*', (req, res) => {
//   console.log('hit server');
//   db.retrieving(function(err, data) {
//     if (err) {
//       console.error(`server retrieve error ${err}`);
//     } else {
//       console.log('server GET processed');
//     }
//   });
//   console.log(req.body);
//   res.status(200).end();
// });

appServer.listen(8080, () => {
  console.log('Flip server listening on :8080')
});