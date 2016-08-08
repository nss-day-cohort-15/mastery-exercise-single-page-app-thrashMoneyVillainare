var CarLot = (function (carlot){


  var printToDOM = document.querySelector(".list-car-inventory");

  carlot.populatePage = function(inventory) {
  inventory.forEach(function (car){
    printToDOM.innerHTML += `<div class="col-md-4 center-box printed-lines" style= "border-color:${car.color};"><h4>${car.year}</h4> <h3>${car.make}</h3> <h3>${car.model}</h3> <h4>in</h4> <h2 style = color:${car.color}>${car.color}</h2> : <h1>${car.price}</h1><br><h4 class = "description">${car.description}</h4><br>
    </div>`;
      })
    carlot.activateEvents();
  }


  carlot.loadInventory(carlot.populatePage);

  return carlot;

})(CarLot || {})