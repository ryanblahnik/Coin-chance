// flip function
// call function
// random math floor 0-2
//  0 = heads, 1 = tails
// result into callback?




angular.module('ngular')
  .service('flipServices', function($http, $window) {

    this.insert = function(entry, callback) {
      $http.post('/', entry)
        .then(function() {
          console.log('flipServices POST');
        })
        .catch(function() {
          console.error('flipServices insert error');
        });
    };

    this.retrieve = function(callback) {
      $http.get('/')
        .then(function({data}) {
          console.log('flipServices GET');
          callback(data);
        })
        .catch(function() {
          console.error('flipServices retrieve error');
        });
    };



// const nextFlip = function(callback) {
//   let result = Math.floor(Math.random() * 2);
//   let output = '';
//   if (result === 0) {
//     output = 'Heads';
//   } else {
//     output = 'Tails';
//   }
//   callback(output);
// };

// nextFlip(function(x) { console.log(x) });



// nextFlip(function(x) {

  // set $ctrl.current to x to display at results

  // put in object with time stamp
    // insert object in database

  // displayResults should recognize db changed,
  //  displayResults should update



});


// const createEntry = function(result, callback) {
//   var newEntry = {
//     result: result,
//     time: new Date()
//   };
//   db.save(null, newEntry, function() {
//     console.log('new entry inserted at db');
//   }

// };
