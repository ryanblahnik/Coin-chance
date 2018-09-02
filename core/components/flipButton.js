angular.module('ngular')
  .component('flipButton', {
    bindings: {
    },
    template:
      `
        <div class="flip-button" style="padding-bottom: 80px">
          <button style="width: 100%">Throw the coin</button>
        </div>
      `
  });