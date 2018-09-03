angular.module('ngular')
  .component('displayResults', {
    bindings: {
      history: '<'
    },
    template:
      `
        <div style="padding-bottom: 120px">
          <display-results-entry
            ng-repeat="entry in $ctrl.history"
            entry="entry"
          ></display-results-entry>
        </div>
      `
  });


// {{history}} displayed or formatted and displayed

// match db
//  - time and result for each entry
//  - as each new result occurs, this recognizes the db update
//      and shows all the most current results


        // <div style="padding-bottom: 120px">
        //   Heads<br>
        //   Heads<br>
        //   Tails<br>
        //   Heads<br>
        //   Tails<br>
        //   Heads<br>
        //   Tails<br>
        //   Tails<br>
        //   Tails<br>
        //   Heads<br>
        //   <display-results-entry
        //     ng-repeat="entry in $ctrl.history"
        //     entry="entry"
        //   ></display-results-entry>
        // </div>