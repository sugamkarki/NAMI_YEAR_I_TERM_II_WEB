//INCOMPLETE so not commented
//INCOMPLETE so not commented
//INCOMPLETE so not commented
//INCOMPLETE so not commented
//INCOMPLETE so not commented
//INCOMPLETE so not commented
//INCOMPLETE so not commented

class Calculator {
  constructor(firstNumber, secondNumber) {
    // this.number = number;
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
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
    let dummy = display.value;
    let index = display.value.indexOf(optr);
	// dummy=
	this.firstNumber=dummy.slice(0,index);
	this.secondNumber=dummy.slice(index,dummy.length)
	console.log(this.firstNumber)
	console.log(this.secondNumber)
    //   console.log(index);
    // display.value
    // }
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
    //   if(display.inner)
    let d = display.value;
    // console.log(d);
    let len = d.length;
    let num = /^[0-9]+$/;
    if (num.test(d[len - 1]) == true) {
      calculator.display(e.innerText);

      calculator.operate(e.innerText);
    }
  });
});
clear.addEventListener("click", () => {
  calculator.clear();
});
copy.addEventListener("click", () => {
  calculator.copy();
});
