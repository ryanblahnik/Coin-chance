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


// update picks an id from the db table
//  flips the result only
//  - the change in the db is recognized and
//      displayResults updates
//  probably do this last because it's weird

// delete
//  - clears all the records, start fresh
//  - page refresh will persist from db
//  - this will clear all history