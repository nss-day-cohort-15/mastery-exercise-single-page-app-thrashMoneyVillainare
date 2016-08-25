"use strict";
var cardStyle = require('./style');


var activateEvents = function(){
  var userInput = document.querySelector("#user_input");
  var cards = document.querySelectorAll(".carCard");

  console.log(cards);
  cards.forEach(function(card){
    card.addEventListener("click", function(){
      userInput.value = "";
      userInput.focus();
      cardStyle.resetCards(cards);
      cardStyle.styleCard(card, "newClass");
      cardStyle.mirrorText(card, userInput);
    });
  });
 };

module.exports = activateEvents;