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