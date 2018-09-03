angular.module('ngular')
  .component('flipButton', {
    bindings: {
      onPress: '<'
    },
    template:
      `
        <div style="padding-bottom: 80px">
          <button
            style="width: 100%;
            border: 1px solid #E4E4E4;
            border-radius: 9px;
            background: white;
            height: 4em"
            ng-click="$ctrl.onPress()"
          >Throw the coin</button>
        </div>
      `
  });