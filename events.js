var CarLot = (function(carlot){

 carlot.activateEvents = function() {
 var carsOnPage = document.querySelectorAll(".printed-lines");
 var textInput = document.querySelector(".form-control")
   function editDescription() {
    console.log("event", event.currentTarget)
    // event.currentTarget.innerHTML = $(".form-control").val()
   }

    function changeBorder(){
      console.log()
      event.currentTarget.classList.toggle("clicked-car");
      textInput.focus();
    }
      carsOnPage.forEach(function(carCard){
      carCard.addEventListener("click", function(event){
        // console.log(event.currentTarget)
        changeBorder();
        editDescription();


      })
    })
  }
  return carlot;

})(CarLot || {})



// $(".printed-lines").forEach(function(carCard){

// })