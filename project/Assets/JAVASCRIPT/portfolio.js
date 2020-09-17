import PopFormOpenClose from "./popFormOpenClose.js";
document.getElementById("openForm").addEventListener("click", () => {
  let popFormOpenClose = new PopFormOpenClose();
  popFormOpenClose.open();
});

document.getElementById("closeForm").addEventListener("click", () => {
  let popFormOpenClose = new PopFormOpenClose();
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
