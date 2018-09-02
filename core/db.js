var mongoose = require('mongoose');
// var Promise = require('bluebird');

mongoose.connect('mongodb://localhost/flips', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function() {
  console.log('db connected on :27017');
});

var historySchema = new mongoose.Schema({
  _id: Number,
  result: String,
  moment: Date
});

var Result = mongoose.model('Result', historySchema);

let counter = 0;
const save = function(err, data, callback) {
  if (err) {
    return console.error(`db save error: ${err}`);
  }
  var record = {
    _id: counter,
    result: data.result,
    moment: data.time
  }
  let storing = new Result(entry);
  storing.save();
  counter += 1;
  callback(null, data);
};

const deleteHistory = function(err, callback) {
  if (err) {
    return console.error(`db delete error: ${err}`);
  }

  callback(null, 'db table cleared');
};

const updateResult = function(err, entry, callback) {
  if (err) {
    return console.error(`db update error: ${err}`);
  }

  callback(null, 'db entry changed');
};


module.exports.save = save;
module.exports.deleteHistory = deleteHistory;
module.exports.updateResult = updateResult;