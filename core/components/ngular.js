// var moment = require('scripts/moment/moment.js');
// moment().format();

angular.module('ngular')
  .component('ngapp', {
    // controller: function(flipServices) {
    controller: function() {

      this.listOfResults = [];

      this.pressButton = () => {
        let result = Math.floor(Math.random() * 2);
        let output = '';
        if (result === 0) {
          output = 'Heads';
        } else {
          output = 'Tails';
        }
        this.current = output;
        let obj = {
          result: output,
          time: new Date()
        };
        this.listOfResults.unshift(obj);
        // console.log(output);
        // console.log('list ', this.listOfResults);
        // call flip
      };

      this.flip = (response) => {

        this.current = response;
        // this.history = response;

      };
      this.changeEntry = (entry) => {
        if (this.listOfResults.length !== 0) {
          let changing = Math.floor(Math.random() * this.listOfResults.length);
          let toFlip = this.listOfResults[changing];
          if (toFlip.result === 'Heads') {
            toFlip.result = 'Tails';
          } else {
            toFlip.result = 'Heads';
          }
        }
      };

      this.deleteEntry = (entry) => {
        this.listOfResults = [];
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

            on-press="$ctrl.pressButton"

          ></flip-button>
          <display-results

            history="$ctrl.listOfResults"


          ></display-results>
          <update-and-delete

            update-click="$ctrl.changeEntry"
            delete-click="$ctrl.deleteEntry"

          ></update-and-delete>
        </div>
      `
  });