Carlot = (function(carlot){

 carlot.activateEvents = function() {
 var carsOnPage = document.querySelectorAll(".list-car-inventory");

   carsOnPage.forEach(e => e.addEventListener("click", selectCar));


   function selectCar(event) {

   }
  }


})(Carlot || {})
