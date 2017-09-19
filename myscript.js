/*The Program I wrote, before watching the video*/
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} 
/*First Question End.*/

if ( correctGuess ) {
    document.write(''); /*Since you're receiving a massage already after correctGuess=true in the next question, the text there will appear, instead of the text here + the text there*/
} else if (guess > randomNumber){ 
  var guessTooBig = prompt("Sorry, the correct number is smaller than " + guess + ". Please try again");
} else if (guess < randomNumber){
  var guessTooSmall = prompt("Sorry, the correct number is bigger than " + guess + ". Please try again");
} else {document.write(" ")
}

/*Second Question End. Values stored*/

if (parseInt(guessTooSmall) === randomNumber ) {
 correctGuess = true 
}
if (parseInt(guessTooBig) === randomNumber ) {
 correctGuess = true 
}

if (correctGuess) {
  document.write('<p>You guessed right! the number is ' + randomNumber + '!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
/*End Game*/
