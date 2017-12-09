/*

HTML file:

Instructions Text
Placeholder for randomNumber to guess
Placeholder for the crystals
Placeholder for userScoreCounter
Scoreboard
	Wins
	Losses

need some kind of function that initiates game.

Display 4 crystals(buttons)
assign values to crystals(this will be done during initialization)
	use math.random to assign values

Display random number to user
	use math.random to come up with number
	assign number to a variable
	display number


Player clicks a crystal/button

	each crystal should have a value attribute equal to a specific number (see calculator example )
	need to register the click on the button with onclick event
	each crystal needs to be assigned to a variable
	will need add the points from the crystal to the user score

Add points to player's total score
	need total score variable
	need player's current score variable

Update total score
Display total score

Determine whether player's score matches random number from beginning of game

If matches, they win
If goes over, they lose
If under, they keep playing

Restart game after wins or losses
	restart should show:
	total wins:
	total losses:
	reassign crystal values;
	reset userScoreCounter;
	reset randomNumber;



*/

$(document).ready(function(){


var hiddenNumber;
var userScoreCounter;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var wins;
var losses;

function resetGame(){
	userScoreCounter=0;
	hiddenNumber=randomNumber();

}
//initializeGame function here

//function that will generate a random number between 1-100 and returns the number.
function randomNumber(){
	var randomNumber=  Math.floor((Math.random() * 100) + 1);
	return randomNumber;
	console.log(randomNumber);
}
 




//add onclick listener to all four crystals. 
	//this function should generate a random number
	//it should check whether the userscore equals the random number
	//if not, then it should add the number to the total score
	//i.e. crystals class is clicked. if crystal 1, clicked, take value and

$("#green").on("click", function(){
	alert("working!");
})

//onclick event for crystal 1
	//





			 
});