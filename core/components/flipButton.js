angular.module('ngular')
  .component('flipButton', {
    controller: function() {
      // this.pressButton = (callback) => {
      //   let result = Math.floor(Math.random() * 2);
      //   let output = '';
      //   if (result === 0) {
      //     output = 'Heads';
      //   } else {
      //     output = 'Tails';
      //   }
      //   callback(output);
      //   // call flip
      // };
    },
    bindings: {
      onPress: '<'
    },
    template:
      `
        <div style="padding-bottom: 80px">
          <button
            style="width: 100%"
            ng-click="$ctrl.onPress()"
          >Throw the coin</button>
        </div>
      `
  });


// where to define flip function

//  flip:
//    - gets a heads or a tails
//    - sends the result to results
//    - sends an entry to the database including time of flip
//      - this recognizes the db has been updated
//        - and displayResults updates too with the full entry




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