angular.module('ngular')
  .component('ngapp', {
    controller: function() {
    },
    template:
      `
        <div>
          <results

          ></results>
          <flip-button

          ></flip-button>
          <display-results

          ></display-results>
          <update-and-delete

          ></update-and-delete>
        </div>
      `
  });