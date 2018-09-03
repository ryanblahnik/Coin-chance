angular.module('ngular')
  .service('flipServices', function($http, $window) {

    this.insert = function(entry, callback) {
      // console.log('flipServices entry ', entry);
      $http.post('/', entry)
        .then(function(data) {
          // console.log(data);
          callback(data.data);
        },
        function() {
          // console.error('flipServices insert error');
        });
    };
});