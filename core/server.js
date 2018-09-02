const express = require('express');
const path = require('path');
const db = require('./db.js');

const appServer = express();
appServer.use(express.static(__dirname));
appServer.use('/scripts', express.static(
  path.join(__dirname, '..', 'node_modules')));

appServer.get('/', (req, res) => {
  // res.end();
});

appServer.post('/', (req, res) => {

});








appServer.listen(8080, () => {
  console.log('Flip server listening on :8080')
  // console.log(path.join(__dirname, '..', 'node_modules'));
});