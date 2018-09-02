const express = require('express');
const path = require('path');
const db = require('./db.js');

const appServer = express();
appServer.use(express.static(__dirname));
appServer.use('/scripts', express.static(
  path.join(__dirname, '..', 'node_modules')));

appServer.get('/', (req, res) => {
  res.status(200).end();
});

appServer.post('/', (req, res) => {
  res.status(201).end();
});








appServer.listen(8080, () => {
  console.log('Flip server listening on :8080')
});