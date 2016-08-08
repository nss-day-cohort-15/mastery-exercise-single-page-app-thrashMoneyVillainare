var CarLot = (function(carlot){

 carlot.activateEvents = function() {
 var carsOnPage = document.querySelectorAll(".printed-lines");
 var textInput = document.querySelector(".form-control")

    function changeBorder(event){
    console.log(event.currentTarget.style)
    event.currentTarget.classList.remove("printed-lines");
    event.currentTarget.classList.add("clicked-car");
    event.textInput.innerHTML = "";
}
   carsOnPage.forEach(function(carCard){
    carCard.addEventListener("click", changeBorder)
   })



   function selectCar(event) {

   }
  }
  return carlot;

})(CarLot || {})
