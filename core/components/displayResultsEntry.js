angular.module('ngular')
  .component('displayResultsEntry', {
    bindings: {
      entry: '<'
    },
    template:
      `
        <div>
          {{$ctrl.entry}}
        </div>
      `
  });


// {{history}} displayed or formatted and displayed

// match db
//  - time and result for each entry
//  - as each new result occurs, this recognizes the db update
//      and shows all the most current results