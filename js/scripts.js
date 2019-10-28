$(document).ready(function(){

var suits = ['clubs', 'hearts', 'diamonds', 'spades'];
var numbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
var deckCards = suits.forEach(function(suit){
  var cards = numbers.forEach(function(number){
    $(".results").append( number + " of " + suit + ", ");

// var result = deckCards.toString();
//   console.log(result);
  });
  console.log(cards);
});




});
