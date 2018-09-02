const express = require('express');
const db = require('./db.js');

const appServer = express();
appServer.use(express.static(__dirname));

appServer.get('/', (req, res) => {
  // res.end();
});

appServer.post('/', (req, res) => {

});








appServer.listen(8080, () => {
  console.log('Flip server listening on :8080')
});