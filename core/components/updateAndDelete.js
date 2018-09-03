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
          width: 100%;
          bottom: 0">
          <button
            style="width: 25%;
            border: 1px solid #E4E4E4;
            border-radius: 9px;
            background: white;
            height: 4em"
            ng-click="$ctrl.updateClick()"
          >Cheat history</button><br>
          <button
            style="width: 25%;
            margin-top: 5px;
            border: 1px solid #E4E4E4;
            border-radius: 9px;
            background: white;
            height: 4em"
            ng-click="$ctrl.deleteClick()"
          >Delete history</button>
        </div>
      `
  });