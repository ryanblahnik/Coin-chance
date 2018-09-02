angular.module('ngular')
  .component('ngapp', {
    controller: function() {
    },
    template:
      `
        <div id="ngapp">
          <div>
            <results

            ></results>
          </div>
          <div>
            <flip-button

            ></flip-button>
          </div>
          <div>
            <display-results

            ></display-results>
          </div>
          <div>
            <update-and-delete

            ></update-and-delete>
          </div>
        </div>
      `
  });