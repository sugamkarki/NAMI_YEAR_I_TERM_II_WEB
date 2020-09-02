function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var submit = document.getElementById("send");
const form = document.getElementById("form");
//ANCHOR FEEDBACK FORM
var feedback = document.getElementById("feedback");
var feedbackButton = document.getElementById("feedbackButton");
var feedbackEdit = document.getElementById("feedbackEdit");

var feedbackText = document.getElementById("feedbackText");
var feedbackName = document.getElementById("feedbackName");
var feedbackEmail = document.getElementById("feedbackEmail");
var feedbackMessage = document.getElementById("feedbackMessage");

submit.addEventListener("click", feedbackOpen);
function feedbackOpen() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var validData = false;
  var validName = false;
  var validEmail = false;
  var validPhone = false;
  var validMessage = false;
  let nmbrs = /^[0-9]+$/;

  var specialChar = /^[A-Za-z ]+$/;
  for (let i = 0; i < name.length; i++) {
    if (
      name[i] == "" ||
      name[i] == "  " ||
      // name[i] == NaN ||
      specialChar.test(name) != true
    ) {
    } else {
      validName = true;
    }
  }
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "" || email[i] == "  ") {
    } else {
      validEmail = true;
    }
  }

  if (nmbrs.test(phone) == true) {
    validPhone = true;
  }
  if (message.length <= 200) {
    validMessage = true;
  }

  if (validName == false) {
    invalidName();
  } else if (validEmail == false) {
    invalidEmail();
  } else if (validPhone == false) {
    invalidPhone();
  } else if (validMessage == false) {
    invalidMessage();
  } else {
    validData = true;
  }
  // console.log(validName + "validName");
  // console.log(validEmail + "email");
  // console.log(validPhone + "num");
  // console.log(validMessage + "msg");
  // console.log(validData + "data");

  if (validData == true) {
    feedbackName.innerHTML = document.getElementById("name").value;
    feedbackEmail.innerHTML = document.getElementById("email").value;
    feedbackMessage.innerHTML = document.getElementById("message").value;
    document.getElementById("frm").style.opacity = 0.2;
    document.getElementById("header").style.opacity = 0.2;
    document.getElementById("footer").style.opacity = 0.2;
    feedback.style.display = "block";
  }
}
feedbackButton.addEventListener("click", feedbackClose);
function feedbackClose() {
  feedback.style.display = "none";
  document.location.reload();
}
feedbackEdit.addEventListener("click", () => {
  feedback.style.display = "none";
  // document.location.reload();
  document.getElementById("frm").style.opacity = 1;
  document.getElementById("header").style.opacity = 1;
  document.getElementById("footer").style.opacity = 1;
});
function invalidName()
{
  alert("invalid name");
  // let val=document.getElementById("name").value
  document.getElementById("name").style.backgroundColor="#ff3838";
  document.getElementById("name").style.color="black";

}
function invalidEmail()
{
  alert("invalid Email");
  document.getElementById("email").style.backgroundColor="#ff3838";
  document.getElementById("email").style.color="black";
  
}
function invalidPhone()
{
  alert("invalid Phone");
  document.getElementById("phone").style.backgroundColor="#ff3838";
  document.getElementById("phone").style.color="black";
  
}
function invalidMessage()
{
  alert("The message is too long");
  document.getElementById("message").style.backgroundColor="#ff3838";
  document.getElementById("message").style.color="black";

}
// }
// function invalidName()
// {
  
// }