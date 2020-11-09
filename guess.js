/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount; //sets variables

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Choose the lower number in the range. It must be at least 0."));
while (intMin < 0 || isNaN(intMin)) //if the min is greater than 0 and it is a number, the loop won't be entered
{
    intMin = parseInt(prompt("I\'m sorry, you entered an invalid number. Try again!"));
}


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Choose the higher number in the range. It must be at least 2 more than your lower number."));
while (intMax < intMin + 2 || isNaN(intMax)) //if the max is greater than intMin + 2 and it is a number, the loop won't be entered
{
    intMax = parseInt(prompt("I\'m sorry, you entered an invalid number. Try again!"));
}

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


//the counter is equal to 1 to make sure the first time going through the loop is counted

intCount = 1;

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intGuess = parseInt(prompt("Please enter your guess of the random number between " + intMin+ " and "+ intMax));
while (intGuess < intMin || intGuess > intMax || isNaN(intGuess) )
{
    intGuess = parseInt(prompt("I\'m sorry, you entered an invalid number. Try again!"));
}

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 while (intGuess != intRandom) // if the users guess is correct, the loop isn't entered
 {
    if (intGuess < intRandom) 
    {
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too low. Please try again!")); //asks the user to input a new number 
        while (intGuess < intMin || intGuess > intMax || isNaN(intGuess) ) // makes sure the next guess is a vaild input
        {
            intGuess = parseInt(prompt("I\'m sorry, you entered an invalid number. Try again!"));
        }
    }
    else
    {
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high. Please try again!"));
        while (intGuess < intMin || intGuess > intMax || isNaN(intGuess) )
        {
            intGuess = parseInt(prompt("I\'m sorry, you entered an invalid number. Try again!"));
        }
    }
 intCount ++; //counts the amount of times the user guesses the wrong number
 }
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
