var mongoose = require('mongoose');
var Promise = require('bluebird');
var http = require('http');
var https = require('https');

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';

var theport = process.env.PORT || 5000;

// mongoose.connect('mongodb://flips', { useNewUrlParser: true });

// const connectFn = function(err, res) {
//   if (err) {
//   console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   } else {
//   console.log ('Succeeded connected to: ' + uristring);
//   }
// };

// connectFn.useNewUrlParser = true;

var opt = {
  uri_decode_auth: true,
  useNewUrlParser: true,
  // auth: {
  //   user: process.env.USER,
  //   pass: process.env.PASS,
  //   authdb: 'flipsmlab'
  // }
};

mongoose.connect(uristring, opt);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function() {
  console.log(`db connected on :${theport}`);
});

var historySchema = new mongoose.Schema({
  _id: Number,
  result: String,
  moment: String
}, { versionKey: false });

var Result = mongoose.model('Result', historySchema);

let counter = 0;
const setCounter = function() {
  Result.find().exec(function(err, data) {
    if (err) {
      console.error(`db length check error: ${err}`);
    } else {
      counter = data.length;
    }
  })
};
setCounter();

const save = function(err, data, callback) {
  if (err) {
    console.error(`db save error: ${err}`);
  } else {
    if (data) {
      setCounter();
      var record = {
        _id: counter,
        result: data.result,
        moment: data.time
      }
      let storing = new Result(record);
      storing.save(function(err, storing) {
        if (err) {
          console.error(`db save err: ${err}`);
        } else {
          counter += 1;
          Result.find().exec(function(err, total) {
            if (err) {
              console.error(`db retrieve error: ${err}`);
            } else {
              callback(null, total);
            }
          })
        }
      });
    } else {
      Result.find().exec(function(err, total) {
        if (err) {
          console.error(`db retrieve error: ${err}`);
        } else {
          callback(null, total);
        }
      })
    }
  }
};

const deleteHistory = function(err, callback) {
  if (err) {
    console.error(`db delete error: ${err}`);
  } else {
    callback(null, 'db table cleared');
    Result.deleteMany({}, function(err) {
      if (err) {
        console.error(`db deleteMany error: ${err}`);
      } else {
        counter = 0;
        Result.find().exec(function(err, newTotal) {
          if (err) {
            console.error(`db find error after drop: ${err}`);
          } else {
            callback(null, newTotal);
          }

        })
      }
    });
  }
};

const updateResult = function(err, entry, callback) {
  if (err) {
    console.error(`db update error: ${err}`);
  } else {
    Result.findById(entry, function(err, result) {
      if (err) {
        console.error(`db update find error: ${err}`);
      } else {
        if (result.result === 'Heads') {
          result.result = 'Tails';
          updateHelper(result, callback);
        } else {
          result.result = 'Heads';
          updateHelper(result, callback);
        }
      }
    });
  }
};

const updateHelper = function(document, callback) {
  document.save(function(err) {
    if (err) {
      console.error(`db update save error: ${err}`);
    } else {
      Result.find().exec(function(err, newTotal) {
        if (err) {
          console.error(`db find error after update: ${err}`);
        } else {
          callback(null, newTotal);
        }
      });
    }
  });
};

module.exports.save = save;
module.exports.deleteHistory = deleteHistory;
module.exports.updateResult = updateResult;