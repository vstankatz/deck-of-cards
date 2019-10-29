
$(document).ready(function(){


  // THIS IS THE FOREACH METHOD!!!///
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

  //THIS IS THE FOR METHOD!!!!///
  // for (var i = 0; i < cards.length; i += 1) {
  //   for (let j =0; j < suits.length; j +=1) {
  //     $(".result").append((cards[i] + " of " + suits[j] + ", "));
  //
  //   }
  // }
  //^^^^^^^^^^^THIS IS THE FOR METHOD!!!!/// ^^^^^^^^

});
