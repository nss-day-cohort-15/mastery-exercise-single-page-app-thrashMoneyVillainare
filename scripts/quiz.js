"use strict";

var carInventory = require('./carLot'),
  eventStuff = require('./events');
  console.log(carInventory);


function populatePage(inventory) {
  var output = document.querySelector(".output");
  var results = "";
  inventory.forEach(function(car, i){
    if (i % 3 === 0){
      results += `<div class="row">`;
    }
    results += `<div class="col-md-4 carCard" style="border-color: ${car.color}">
    <h3>${car.make}</h3>
    <h3>${car.model}</h3>
    ${car.price},
    ${car.color},
    ${car.purchased},
    <p>${car.description}</p>
    </div>`;
    if((i+1) % 3 === 0){
    results += `</div>`;
    }
  });

  output.innerHTML = results;
  }
carInventory.loadInventory()
.then(
  function(inventoryFromLoadInventoryResolve){
    populatePage(inventoryFromLoadInventoryResolve);
  },
  function(reason){
    console.log('something went wrong', reason);
  })
  .then(function(){
    eventStuff();
  });
