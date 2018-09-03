angular.module('ngular')
  .service('flipServices', function($http, $window) {

    this.insert = function(entry, callback) {
      $http.post('/', entry)
        .then(function(data) {
          callback(data.data);
        },
        function(err) {
          console.error(`flipServices insert error: ${err}`);
        });
    };

  });