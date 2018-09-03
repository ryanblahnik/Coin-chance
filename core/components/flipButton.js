angular.module('ngular')
  .component('flipButton', {
    bindings: {
      onPress: '<'
    },
    template:
      `
        <div style="padding-bottom: 80px">
          <button
            style="width: 100%"
            ng-click="$ctrl.onPress()"
          >Throw the coin</button>
        </div>
      `
  });