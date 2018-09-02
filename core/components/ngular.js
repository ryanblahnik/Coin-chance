angular.module('ngular')
  .component('ngapp', {
    // controller: function(flipServices) {
    controller: function() {
      this.flip = (response) => {

        this.current = response;
        this.history = response;

      };
      this.changeEntry = (entry) => {

      };
      this.deleteEntry = (entry) => {

      };
      // this.flipService = flipServices;
    },
    template:
      `
        <div>
          <results

            current="$ctrl.current"

          ></results>
          <flip-button

            on-click="$ctrl.flip"

          ></flip-button>
          <display-results

            history="$ctrl.history"

          ></display-results>
          <update-and-delete

            update-click="$ctrl.changeEntry"
            delete-click="$ctrl.deleteEntry"

          ></update-and-delete>
        </div>
      `
  });