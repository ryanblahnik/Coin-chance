angular.module('ngular')
  .component('results', {
    bindings: {
    },
    template:
      `
        <div style="padding: 50px 0">
          <h2>Heads</h2>
          <p>{{'ng ' + 'te' + 'st'}}</p>
        </div>
      `
  });



  // {{flip result}} within <h2>