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
var red;
var blue;
var yellow;
var green;
var wins;
var losses;

function randomNumber(){
	var randomNumber=  Math.floor((Math.random() * 100) + 1);
	return randomNumber;
	
}
function resetGame(){
	userScoreCounter=0;
	$("#running-score").empty();
	hiddenNumber=randomNumber();
	crystalNumbers();
	//function to generate a random number for each crystal. this number will become the value attribute of it

}
//initializeGame function here

//function that will generate a random number between 1-100 and returns the number.


hiddenNumber=randomNumber();
console.log(hiddenNumber);
$("#randomNumber").text(hiddenNumber);
//randomNumber();

console.log(hiddenNumber);
//Assign random number between 1-10 to each crystal.
//This value needs to be added as a value attribute?
function crystalNumbers(){
	red=Math.floor((Math.random() * 10) + 1);
	blue=Math.floor((Math.random() * 10) + 1);
	yellow=Math.floor((Math.random() * 10) + 1);
	green=Math.floor((Math.random() * 10) + 1);
 
}

crystalNumbers();

console.log(red);
console.log(green);

//add onclick listener to all four crystals. 
	
	//it should check whether the userscore equals the random number
	//if not, then it should add the number to the total score and the total score text should display
userScoreCounter=0;



$("#green").on("click", function(){
	userScoreCounter=userScoreCounter+green;
	$("#running-score").text(userScoreCounter);
	checkWin();
	console.log(userScoreCounter);
})

$("#red").on("click", function(){
	userScoreCounter=userScoreCounter+red;
	$("#running-score").text(userScoreCounter);
	checkWin();
	
})

$("#blue").on("click", function(){
	userScoreCounter=userScoreCounter+blue;
	$("#running-score").text(userScoreCounter);
	checkWin();
})

$("#yellow").on("click", function(){
	userScoreCounter=userScoreCounter+yellow;
	$("#running-score").text(userScoreCounter);
	checkWin();
})



function checkWin(){

	if (userScoreCounter > hiddenNumber){
		losses++;
		alert("Sorry, you lost!");
		$("#losses").text(losses);
		resetGame();

	}

	if (userScoreCounter===hiddenNumber){
		wins++;
		alert("Yay, you won!");
		$("#wins").text(wins);
		resetGame();
	}
}
//win function that will increment the wins and reset game
/*function win(){
	wins++;
	$("#wins").text(wins);
	resetGame();
}

//loss function that will increment the losses and reset game
function loss(){
	losses++;
	$("#losses").text(losses);
	resetGame();
}
*/

});