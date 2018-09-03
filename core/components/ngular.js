angular.module('ngular')
  .component('ngapp', {
    controller: function(flipServices) {

      this.listOfResults = [];

      this.previous = (response) => {
        this.listOfResults = response;
      }

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
        flipServices.insert(obj, this.previous);
      };

      // this.flip = (response) => {
      //   this.current = response;
      //   // this.history = response;
      // };

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
        flipServices.insert({cheat: true}, this.previous);
      };

      this.deleteEntry = (entry) => {
        flipServices.insert({drop: true}, this.previous);
      };

      flipServices.insert(null, this.previous);

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