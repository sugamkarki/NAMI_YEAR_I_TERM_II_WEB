function openForm() {
	form.open();
  }
  
  function closeForm() {
	form.close();
  }const form={
	open:function()
	{
	  document.getElementById("myForm").style.display = "block";
  
	},
	close:function()
	{
	  document.getElementById("myForm").style.display = "none";
  
	}
  }
  
function openPoing() {
	window.open(
		"game.html",
		"Win 2",
		"width=1300, height=600, top=100, left=100, resizable=1, menubar=yes",
		true
	);
}
function openRPS() {
	window.open(
		"RockPaperScissors.html",
		"Win 2",
		"width=1300, height=600, top=100, left=100, resizable=1, menubar=yes",
		true
	);
}
function openCalc() {
	window.open(
		"calculator.html",
		"Win 2",
		"width=1300, height=600, top=100, left=100, resizable=1, menubar=yes",
		true
	);
}
