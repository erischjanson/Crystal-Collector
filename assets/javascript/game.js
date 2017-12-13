

$(document).ready(function(){

var userScoreCounter;
var red;
var blue;
var yellow;
var green;
var wins=0;
var losses=0;

var hiddenNumber=randomNumber();
console.log(hiddenNumber);
$("#randomNumber").text(hiddenNumber);

function randomNumber(){
	var randomNumber=  Math.floor((Math.random() * 100) + 1);
	return randomNumber;
	
}
function resetGame(){
	userScoreCounter=0;
	$("#running-score").empty();
	hiddenNumber=randomNumber();
	console.log(hiddenNumber);
	$("#randomNumber").text(hiddenNumber);
	crystalNumbers();
	
}


function crystalNumbers(){
	red=Math.floor((Math.random() * 12) + 1);
	blue=Math.floor((Math.random() * 12) + 1);
	yellow=Math.floor((Math.random() * 12) + 1);
	green=Math.floor((Math.random() * 12) + 1);
 
}

crystalNumbers();


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


});