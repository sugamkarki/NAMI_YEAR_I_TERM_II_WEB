// adds event listener to openForm
document.getElementById("openForm").addEventListener("click", () => {
    // sets the display to block of the element
  document.getElementById("myForm").style.display = "block";

});

document.getElementById("closeForm").addEventListener("click", () => {
    // sets the display to block of the element
    document.getElementById("myForm").style.display = "none";
    // popFormOpenClose.close();
});
document.getElementById("closeForm").addEventListener("click", () => {
  // creates an instance of the imported class
  let popFormOpenClose = new PopFormOpenClose();
  // calls the function of the class	
  popFormOpenClose.close();
});
document.getElementById("openPoing").addEventListener('click',()=>
{
	// console.log("object")
	openPoing();
})
document.getElementById("openCalc").addEventListener('click',()=>
{
	// console.log("object")
	openCalc();
})
document.getElementById("openRPS").addEventListener('click',()=>
{
	// console.log("object")
	openRPS();
})

function openPoing() {
	window.open(
		"../HTML/game.html",
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
