var CarLot = (function () {
  var inventoryArray = [];
  return {
    loadInventory: function (callback) {
      var xhr = new XMLHttpRequest ();
      xhr.open("GET", "inventory.json");
      xhr.addEventListener("load", function(){
        inventoryArray = JSON.stringify(xhr.responseText)
        debugger
        callback(inventoryArray)
      })
      xhr.send();
    }
  }
} () )

function populatePage (inventory) {
  var list = document.querySelector(".list-car-inventory");
  inventory.forEach(function (cars){
    list.innerHTML += `<div>${cars}</div>`
  })
}

CarLot.loadInventory(populatePage);


// function showCarnivores (carni) {
//   var list = document.querySelector(".carnivores")
//   carni.forEach(function (carnivore){
//     list.innerHTML += `<li>${carnivore}</li>`
//   })
// }