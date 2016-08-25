"use strict";
var inventory = [];

var getInventory = function () {
  return inventory;
};
var loadInventory = function () {
  return new Promise( function (resolve, reject){
    var inventoryLoader = new XMLHttpRequest();
    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).cars;
      resolve(inventory);
    });
    inventoryLoader.send();
  });
};

module.exports = { getInventory, loadInventory };

// loadInventory: function() {
//     var inventoryLoader = new XMLHttpRequest();
//         inventoryLoader.open("GET", "inventory.json");
//       inventoryLoader.addEventListener("load", function () {
//         inventory = JSON.parse(this.responseText).cars;
//         callback(inventory);
//       });
//       inventoryLoader.send();

//       inventoryLoader.addEventListener("load", function(){
//         var data = JSON.parse( this.responseText);
//         resolve(inventory);
//       });
//   }
// };


//browserify: module.exports = {getInventory, loadInventory}  (objet literal shorthand),