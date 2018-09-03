angular.module('ngular')
  .component('updateAndDelete', {
    bindings: {
      updateClick: '<',
      deleteClick: '<'
    },
    template:
      `
        <div
          style="padding: 80px 0 20px 10px;
          position: fixed;
          bottom: 0">
          <button
            style="width: 90px"
            ng-click="$ctrl.updateClick()"
          >Cheat history</button><br>
          <button
            style="width: 90px"
            ng-click="$ctrl.deleteClick()"
          >Delete history</button>
        </div>
      `
  });