// creates variables with the content from HTML 
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var left = document.getElementById("left");
var right = document.getElementById("right");
// creates variables leftSide and rightSide
var leftSide;
var rightSide;
// adds eventListener to the variables on click
rock.addEventListener("click", functionRock);
paper.addEventListener("click", functionPaper);
scissors.addEventListener("click", functionScissors);
// function
function functionRock() {
	// sets the var to the clicked image
	leftSide="rock"
	// removes the left content
	left.remove();
	// sets new classname to the document
	document.getElementById("leftPlayer").className = "fas fa-10x fa-hand-rock";
	// calls the functions
	leftCss();
	rightRandom();
}
function functionPaper() {
	// sets the var to the clicked image
    leftSide="paper"
	// removes the left content
	left.remove();
	// sets new classname to the document
	document.getElementById("leftPlayer").className = "far fa-10x fa-sticky-note";
	// calls the functions
	leftCss();
	rightRandom();
}
function functionScissors() {
	// sets the var to the clicked image
    leftSide="scissor"
	// removes the left content
	left.remove();
	// sets new classname to the document
	document.getElementById("leftPlayer").className =
		"far fa-10x fa-hand-scissors";
	// calls the functions
	leftCss();
	rightRandom();
}

function rightRandom() {
	// declares the varibales
	let choice = 0;
	// gets a random variable from 0-3
	choice = Math.floor(Math.random() * 3);
	// checks the condition and calls the functions accordingly
	if (choice == 0) {
		rightRock();
	}
	if (choice == 1) {
		rightPaper();
	}
	if (choice == 2) {
		rightScissors();
	}
}
function rightRock() {
	// sets the var to the randomly selected image
    rightSide="rock";
	// removes the right content
	right.remove();
	document.getElementById("rightPlayer").className = "far fa-10x fa-hand-rock";
	// calls the functions
	leftCss();
	winnerCheck();
}
function rightPaper() {
	// sets the var to the randomly selected image
    rightSide="paper";
	// removes the right content
	right.remove();
	// sets new classname to the document
	document.getElementById("rightPlayer").className =
		"far fa-10x fa-sticky-note";
	// calls the functions
	leftCss();
	winnerCheck();
}
function rightScissors() {
	// sets the var to the randomly selected image
    rightSide="scissor";
	// removes the right content
	right.remove();
	// sets new classname to the document
	document.getElementById("rightPlayer").className =
		"far fa-10x fa-hand-scissors";
	// calls the functions
	leftCss();
	winnerCheck();
}
function winnerCheck() {
	// checks who won in this function in with the following given conditions and calls the function accordingly
    if(rightSide==leftSide)
    {
        gameDraw();
    }
    if(rightSide=="rock"&&leftSide=="scissor")
    {
        rightWins();
    }
    if(leftSide=="rock"&&rightSide=="scissor")
    {
        leftWins();
    }
    if(rightSide=="rock"&&leftSide=="paper")
    {
        leftWins();
    }
    if(leftSide=="rock"&&rightSide=="paper")
    {
        rightWins();
    }
    if(rightSide=="paper"&&leftSide=="scissor")
    {
        leftWins();
    }
    if(leftSide=="paper"&&rightSide=="scissor")
    {
        rightWins();
    }
	
}
function gameDraw() {
	// sets the content to "DRAW"
    document.getElementById('winner').firstChild.nodeValue="DRAW!!!";
}
	// sets the content to "COMPUTER WINS!!!"
function rightWins() {
	document.getElementById('winner').firstChild.nodeValue="COMPUTER WINS!!!";
	// sets the border
	document.getElementById("rightPlayer").style.border = "10px solid red";
	
    
}
function leftWins() {
	// sets the content to "YOU WIN!!!"
	document.getElementById('winner').firstChild.nodeValue="YOU WIN!!!";
	// sets the border
	document.getElementById("leftPlayer").style.border = "10px solid red";
	
    
}
// resets the whole program and sets everything to the default values
function reset() {
	right.remove();
	left.remove();
	document.getElementById("leftPlayer").className = "far fa-10x fa-smile-beam";
	document.getElementById("rightPlayer").className = "far fa-10x fa-smile-beam";
// resets the css values 
	document.getElementById("leftPlayer").style.backgroundColor = "aqua";
	document.getElementById("leftPlayer").style.padding = "10px";
	document.getElementById("leftPlayer").style.margin = "100px";
	document.getElementById("leftPlayer").style.border = "3px solid black";
	document.getElementById("rightPlayer").style.backgroundColor =
		"rgb(151, 182, 182)";
	document.getElementById("rightPlayer").style.padding = "10px";
	document.getElementById("rightPlayer").style.margin = "100px";
    document.getElementById("rightPlayer").style.border = "3px solid black";
    document.getElementById('winner').firstChild.nodeValue="Rock Papers Scissors";
}
function leftCss() {
	// adds the css properties to the left side div
	document.getElementById("leftPlayer").style.backgroundColor = "aqua";
	document.getElementById("leftPlayer").style.padding = "10px";
	document.getElementById("leftPlayer").style.margin = "100px";
	document.getElementById("leftPlayer").style.border = "3px solid black";

	document.getElementById("rightPlayer").style.backgroundColor =
		"rgb(151, 182, 182)";
	document.getElementById("rightPlayer").style.padding = "10px";
	document.getElementById("rightPlayer").style.margin = "100px";
	document.getElementById("rightPlayer").style.border = "3px solid black";
}
