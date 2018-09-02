angular.module('ngular')
  .component('updateAndDelete', {
    bindings: {
    },
    template:
      `
        <div class="update-and-delete" style="padding: 80px 0 20px 10px; position: fixed; bottom: 0">
          <button style="width: 90px">Cheat history</button><br>
          <button style="width: 90px">Delete history</button>
        </div>
      `
  });