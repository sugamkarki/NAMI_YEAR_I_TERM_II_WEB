// imports PopFormOpenClose from ./popFormOpenClose.js module
import PopFormOpenClose from "./popFormOpenClose.js";
// adds event listener to openForm
document.getElementById("openForm").addEventListener("click", () => {
  // creates an instance of the imported class
  let popFormOpenClose = new PopFormOpenClose();
  // calls the function of the class
  popFormOpenClose.open();
});

document.getElementById("closeForm").addEventListener("click", () => {
  // creates an instance of the imported class
  let popFormOpenClose = new PopFormOpenClose();
  // calls the function of the class
  popFormOpenClose.close();
});
function openPoing() {
	window.open(
		"game.html",
		"Poing Game",
		"width=1300, height=600, top=100, left=100, resizable=1, menubar=yes",
		true
	);
}
function openRPS() {
	window.open(
		"RockPaperScissors.html",
		"RockPaperScissors",
		"width=1300, height=600, top=100, left=100, resizable=1, menubar=yes",
		true
	);
}
function openCalc() {
	window.open(
		"calculator.html",
		"Calculator",
		"width=1300, height=600, top=100, left=100, resizable=1, menubar=yes",
		true
	);
}
