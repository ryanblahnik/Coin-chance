angular.module('ngular')
  .component('displayResultsEntry', {
    bindings: {
      entry: '<'
    },
    template:
      `
        <strong>{{$ctrl.entry.result}}</strong>
        <em style="float:right">{{$ctrl.entry.moment}}</em><br>
      `
  });


// {{history}} displayed or formatted and displayed

// match db
//  - time and result for each entry
//  - as each new result occurs, this recognizes the db update
//      and shows all the most current results