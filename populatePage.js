var CarLot = (function (carlot){


  var printToDOM = document.querySelector(".list-car-inventory");

  carlot.populatePage = function(inventory) {
  inventory.forEach(function (car){
    printToDOM.innerHTML += `<div class="col-md-4 center-box printed-lines" style= "border-color:${car.color};">${car.year} ${car.make} ${car.model} in ${car.color} : ${car.price}<br>${car.description}<br>
    </div>`;
      })

  }


  carlot.loadInventory(carlot.populatePage);

  return carlot;

})(CarLot || {})