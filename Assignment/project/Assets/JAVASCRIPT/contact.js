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
// creates an object formId and creates variables of all the input areas from the HTML
const formId = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  message: document.getElementById("message"),
  submit: document.getElementById("send"),
};
// creates an object errorMessage and creates variables for error messages from the HTML
const errorMessage = {
  name: document.getElementById("errorNamePop"),
  email: document.getElementById("errorEmailPop"),
  phone: document.getElementById("errorPhonePop"),
  message: document.getElementById("errorMessagePop"),
};
// creates an opject feedback for all the feedback elements in the feedback container
const feedback = {
  name: document.getElementById("feedbackName"),
  feedbackId: document.getElementById("feedback"),
  email: document.getElementById("feedbackEmail"),
  message: document.getElementById("feedbackMessage"),
  send: document.getElementById("feedbackSendButton"),
  edit: document.getElementById("feedbackEditButton"),
// creates an function for the oprnFeedback variable
  openFeedback: function () {
    // the values of the userInputted datas are stored in the variables
    this.name.innerHTML = formId.name.value;
    this.email.innerHTML = formId.email.value;
    this.message.innerHTML = formId.message.value;
    // sets the display to block
    this.feedbackId.style.display = "block";
    // when the button is clcked, the following codes are executed
    this.send.addEventListener("click", () => {
      // sends an alert message
      alert("Message Sent");
      // reloads the document
      document.location.reload();
    });
    // when the button is clcked, the following codes are executed
    this.edit.addEventListener("click", () => {
      // the display is set to none
      this.feedbackId.style.display = "none";
    });
  },
};
// creates an obejct validity where boolean values of datas are stored
let validity = {
  validName: false,
  validEmail: false,
  validPhone: false,
  validMessage: false,
};
// when the button is clicked, the following tasks are executed
formId.submit.addEventListener("click", checkDatasFromSubmit);

// when the text area loses the focus, the following tasks are executed
formId.name.addEventListener("blur", () => {
  // the function to check the data is called
  checkName();
  // if the boolean is false,..
  if (validity.validName == false) {
    // it calls the children of the obejects
    addErrorMessage.errorNameAdd();
  } else {
    removeErrorMessage.errorNameRemove();
  }
});

// when the text area loses the focus, the following tasks are executed
formId.email.addEventListener("blur", () => {
  // the function to check the data is called
  checkEmail();
  // if the boolean is false,.
  if (validity.validEmail == false) {
     // it calls the children of the obejects
    addErrorMessage.errorEmailAdd();
  } else {
    removeErrorMessage.errorEmailRemove();
  }
});

// when the text area loses the focus, the following tasks are executed
formId.phone.addEventListener("blur", () => {
  // the function to check the data is called
  checkPhone();
  // if the boolean is false,.
  if (validity.validPhone == false) {
    addErrorMessage.errorPhoneAdd();
     // it calls the children of the obejects
  } else {
    removeErrorMessage.errorPhoneRemove();
  }
});
// when the text area loses the focus, the following tasks are executed
formId.message.addEventListener("blur", () => {
  // the function to check the data is called
  checkMessage();
  // if the boolean is false,.
  if (validity.validMessage == false) {
    addErrorMessage.errorMessageAdd();
     // it calls the children of the obejects
  } else {
    removeErrorMessage.errorMessageRemove();
  }
});
// creates a constructor function
function variablesWithValues() {
  // stores the values of user data in the variables
  this.name = formId.name.value;
  this.email = formId.email.value;
  this.phone = formId.phone.value;
  this.message = formId.message.value;
  // creates an RegEx for the numericals and alphabets
  this.numericals = /^[0-9]+$/;
  this.alphabets = /^[A-Za-z ]+$/;
}
function checkDatasFromSubmit() {
  // calls the function to check data
  checkDatas();
  // checks if all tha values are true or not
  if (
    validity.validMessage == true &&
    validity.validEmail == true &&
    validity.validName == true &&
    validity.validPhone == true
  ) {
    // calls the function
    feedback.openFeedback();
  }
}

function checkDatas() {
  // calls the following functions
  checkName();
  checkEmail();
  checkPhone();
  checkMessage();
  checkError();
}
const addErrorMessage = {
  errorNameAdd: function () {
    // sets the style to block
    errorMessage.name.style.display = "block";
    // sets the border of the text
    formId.name.style.border = "2px red solid";
  },
  errorEmailAdd: function () {
    // sets the style to block
    errorMessage.email.style.display = "block";
    // sets the border of the text
    formId.email.style.border = "2px red solid";
  },
  errorPhoneAdd: function () {
    // sets the style to block
    errorMessage.phone.style.display = "block";
    // sets the border of the text
    formId.phone.style.border = "2px red solid";
  },
  errorMessageAdd: function () {
    // sets the style to block
    errorMessage.message.style.display = "block";
    // sets the border of the text
    formId.message.style.border = "2px red solid";
  },
};
const removeErrorMessage = {
  errorNameRemove: function () {
    // sets the style to none
    errorMessage.name.style.display = "none";
    // sets the border of the text to none
    formId.name.style.border = "none";
  },
  errorEmailRemove: function () {
    // sets the style to none
    errorMessage.email.style.display = "none";
    // sets the border of the text to none
    formId.email.style.border = "none";
  },
  errorPhoneRemove: function () {
    // sets the style to none
    errorMessage.phone.style.display = "none";
    // sets the border of the text to none
    formId.phone.style.border = "none";
  },
  errorMessageRemove: function () {
    // sets the style to none
    errorMessage.message.style.display = "none";
    // sets the border of the text to none
    formId.message.style.border = "none";
  },
};
function checkError() {
  // checks if the values are true or false and acts accordingly by calling the appropriate functions in both cases
  if (validity.validName == false) {
    addErrorMessage.errorNameAdd();
  } else if (validity.validName == true) {
    removeErrorMessage.errorNameRemove();
  }
  if (validity.validEmail != true) {
    addErrorMessage.errorEmailAdd();
  } else if (validity.validEmail == true) {
    removeErrorMessage.errorEmailRemove();
  }
  if (validity.validPhone != true) {
    addErrorMessage.errorPhoneAdd();
  } else if (validity.validPhone == true) {
    removeErrorMessage.errorPhoneRemove();
  }
  if (validity.validMessage != true) {
    addErrorMessage.errorMessageAdd();
  } else if (validity.validMessage == true) {
    removeErrorMessage.errorMessageRemove();
  }
}
function checkName() {
  // creates an instance of the function
  let obj = new variablesWithValues();
  // checks if the text lies under the predefined expressions
  if (obj.alphabets.test(obj.name) == true) {
    validity.validName = true;
  } else {
    validity.validName = false;
  }
}
function checkEmail() {
  // creates an instance of the function
  let obj = new variablesWithValues();
  let sign1 = false;
  let sign2 = false;
  // checks if the symbols fall in the text
  for (let key of obj.email) {
    if (key == "@") {
      sign1 = true;
      break;
    }
  }
  // checks if the symbols fall in the text
  for (let key of obj.email) {
    if (key == ".") {
      sign2 = true;
      break;
    }
  }
  // checks if both consitions are true or not
  if (sign1 == true && sign2 == true) {
    validity.validEmail = true;
  } else {
    validity.validEmail = false;
  }
}
function checkPhone() {
  // creates an instance of the function
  let obj = new variablesWithValues();
  // checks if the phone number lies under predefiuned numbers
  if (obj.numericals.test(obj.phone) == true) {
    validity.validPhone = true;
  } else {
    validity.validPhone = false;
  }
}
function checkMessage() {
  // creates an instance of the function
  let obj = new variablesWithValues();
  // checks if the total length of text is zero or over than 200
  if (obj.message.length > 200 || obj.message.length == 0) {
    validity.validMessage = false;
  } else {
    validity.validMessage = true;
  }
}
