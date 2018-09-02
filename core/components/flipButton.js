angular.module('ngular')
  .component('flipButton', {
    controller: function() {
      this.pressButton = () => {
        // call flip
      };
    },
    bindings: {
    },
    template:
      `
        <div style="padding-bottom: 80px">
          <button
            style="width: 100%"
            ng-click="$ctrl.pressButton()"
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
