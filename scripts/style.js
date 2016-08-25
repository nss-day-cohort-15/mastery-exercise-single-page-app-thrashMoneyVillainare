"use strict";


    var resetCards = function(cards){
      cards.forEach(function(card){
      card.classList.remove("newClass");
      });
      // console.log(cards)
    };

   var styleCard = function(card, newStyle){
      card.classList.add(newStyle);
    };

   var mirrorText = function(card, userInput){
      userInput.addEventListener("keyup", function(){
        if(card.classList.contains("newClass")){
          card.querySelector("p").innerText = userInput.value;
        }
      });
    };

   module.exports = {resetCards, styleCard, mirrorText};