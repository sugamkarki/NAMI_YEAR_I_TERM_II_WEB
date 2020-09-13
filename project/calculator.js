class Calculator {
  constructor(firstNumber,secondNumber) {
	// this.number = number;
	this.firstNumber=firstNumber;
	this.secondNumber=secondNumber;
  }
  display(number) {
    display.value += number;
  }
  clear() {
    display.value = "";
  }
  copy() {
    var copyText = document.getElementById("display");
    copyText.select();
    document.execCommand("Copy");
  }
  operate(optr) {
	
  }
}
function copyAnswer() {
  display.select();
  document.execCommand("Copy");
}
var display = document.getElementById("display");
var number = document.querySelectorAll(".dig");
var operator = document.querySelectorAll(".opr");
var clear = document.getElementById("clear");
var copy = document.getElementById("copy");
var equals = document.getElementById("equals");

let calculator = new Calculator();
number.forEach((e) => {
  e.addEventListener("click", () => {
    calculator.display(e.innerText);
  });
});
operator.forEach((e) => {
  e.addEventListener("click", () => {
    calculator.operate(e.innerText);
    calculator.display(e.innerText);
  });
});
clear.addEventListener("click", () => {
  calculator.clear();
});
copy.addEventListener("click", () => {
  calculator.copy();
});
