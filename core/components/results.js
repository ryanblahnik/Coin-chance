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



// {{current}} within <h2>


// get most recent result coming in to display here