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