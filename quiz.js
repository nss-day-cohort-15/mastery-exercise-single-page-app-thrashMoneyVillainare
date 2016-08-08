var CarLot = (function (carlot) {
  var inventoryArray = [];

  carlot.getInventory = function () {
    return inventoryArray;
  }

  carlot.loadInventory = function (callback) {
    var xhr = new XMLHttpRequest ();
    xhr.open("GET", "inventory.json");
    xhr.addEventListener("load", function(){
      inventoryArray = JSON.parse(xhr.responseText).cars;
      callback(inventoryArray);
    });
    xhr.send();
    }
    return carlot;

  })(CarLot || {})
























// var list = document.querySelector(".list-car-inventory");
// list.addEventListener("click", function (event){
//   console.log(event, "heard");
