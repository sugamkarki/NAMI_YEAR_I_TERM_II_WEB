function openForm() {

  document.getElementById("myForm").style.display = "block";

}

function closeForm() {

  document.getElementById("myForm").style.display = "none";

}

var name = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message');
var submit = document.getElementById('send');
const form = document.getElementById('form');

// var name = document.forms["form"]["Name"];  
// console.log(name);
function validate() {
  // var name = document.getElementById('name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var message = document.getElementById('message');
  var submit = document.getElementById('send');
  const form = document.getElementById('form');

  var nm = document.getElementById('name');
  // alert(name.value);
  alert(nm.value);

}