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
            style="width: 40%;
            border: 1px solid #E4E4E4;
            border-radius: 7px;
            background: white;
            height: 8em"
            ng-click="$ctrl.updateClick()"
          >Cheat history</button><br>
          <button
            style="width: 40%;
            margin-top: 20px;
            border: 1px solid #E4E4E4;
            border-radius: 7px;
            background: white;
            height: 8em"
            ng-click="$ctrl.deleteClick()"
          >Delete history</button>
        </div>
      `
  });