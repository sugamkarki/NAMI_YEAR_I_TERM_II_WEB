var display = document.getElementById("display");
var number = document.querySelectorAll(".dig");
var operator = document.querySelectorAll(".opr");
var clear = document.getElementById("clear");
var copy = document.getElementById("copy");
var equals = document.getElementById("equals");
var a = display.innerText;
// var a=0;

var b, c, d;
clear.addEventListener("click", clr);
equals.addEventListener("click", eqls);
function eqls() {
  let length = a.length;
  console.log(a[0]);
  for (let i = 0; i < length; i++) {
    if (a[i] == "+") {
      // console.log(a);
      b = a.split("+");
    }
    // console.log(Number(a));
  }
}
function clr() {
  display.innerHTML = " ";
}
nmbrs();
function nmbrs() {
  for (let i = 0; i < number.length; i++) {
    // var val = number[i].innerHTML;
    number[i].addEventListener("click", function () {
      var val = number[i].innerHTML;

      let tbd = display.innerHTML;
      tbd += val;
      a = val;
      display.innerHTML = tbd;
    });
    // console.log(a);
  }
  optr();
}
function getNmbr(val) {
  let tbd = display.innerHTML;
  tbd += val;
  display.innerHTML = tbd;
}
function optr() {
  for (let j = 0; j < operator.length; j++) {
    let val = operator[j].innerHTML;

    operator[j].addEventListener("click", function () {
      let tbd = display.innerHTML;
      // let val=operator[j].innerHTML;
      tbd += val;
      display.innerHTML = tbd;
    });
  }
}
