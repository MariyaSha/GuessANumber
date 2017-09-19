//script that was written after watching the teachers' explanation, please see myscript.js to view the code I wrote prior to his example.

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) +1;
console.log(randomNumber); /*To be able to test the program better, I get to check all the options knowing what the randomNumber is via the console*/
var guess = prompt("I'm thinking of a number between 1 and 6. What is it?");

if ( parseInt(guess) === randomNumber ){
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber){
  var guessMore = prompt("The number is bigger than " + guess + ". Please try again");
    if (parseInt(guessMore) === randomNumber){
    correctGuess = true;
    }
} else if ( parseInt(guess) > randomNumber){
  var guessLess = prompt("The number is smaller than " + guess + ". Please try again");
    if (parseInt(guessLess) === randomNumber){
    correctGuess = true;
   }
}


if ( correctGuess ) {
  document.write('<p>You are correct! The number is ' + randomNumber + '!</p>');
} else {
  document.write('<p>Sorry, the number is ' + randomNumber + '.</p>');
}
