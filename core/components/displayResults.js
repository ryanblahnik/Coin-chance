angular.module('ngular')
  .component('displayResults', {
    bindings: {
      history: '<'
    },
    template:
      `
        <div style="padding-bottom: 120px">
          <table>
              <display-results-entry
                ng-repeat="entry in $ctrl.history | orderBy:'':true"
                entry="entry"
              ></display-results-entry>
          </table>
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


      //           <div style="padding-bottom: 120px">
      //     <table>
      //       <tr>
      //         <th>test</th>
      //         <th>test</th>
      //       </tr>
      //         <display-results-entry
      //           ng-repeat="entry in $ctrl.history | orderBy:'':true"
      //           entry="entry"
      //         ></display-results-entry>
      //     </table>
      //   </div>
      // `


      // `
      //   <div style="padding-bottom: 120px">
      //     <table>
      //         <display-results-entry
      //           ng-repeat="entry in $ctrl.history | orderBy:'':true"
      //           entry="entry"
      //         ></display-results-entry>
      //     </table>
      //   </div>
      // `