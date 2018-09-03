angular.module('ngular')
  .component('results', {
    bindings: {
      current: '<'
    },
    template:
      `
        <div style="padding: 50px 0">
          <h2>{{$ctrl.current || '&nbsp'}}</h2>
        </div>
      `
  });