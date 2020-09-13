function openForm() {
  form.open();
}

function closeForm() {
  form.close();
}
const form = {
  open: function () {
    document.getElementById("myForm").style.display = "block";
  },
  close: function () {
    document.getElementById("myForm").style.display = "none";
  },
};
const formId = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  message: document.getElementById("message"),
  submit: document.getElementById("send"),
};
const errorMessage = {
  name: document.getElementById("errorNamePop"),
  email: document.getElementById("errorEmailPop"),
  phone: document.getElementById("errorPhonePop"),
  message: document.getElementById("errorMessagePop"),
};
const feedback = {
  name: document.getElementById("feedbackName"),
  feedbackId: document.getElementById("feedback"),
  email: document.getElementById("feedbackEmail"),
  message: document.getElementById("feedbackMessage"),
  send: document.getElementById("feedbackSendButton"),
  edit: document.getElementById("feedbackEditButton"),
  openFeedback: function () {
    this.name.innerHTML = formId.name.value;
    this.email.innerHTML = formId.email.value;
    this.message.innerHTML = formId.message.value;
    this.feedbackId.style.display = "block";
    this.send.addEventListener("click", () => {
      document.location.reload();
    });
    this.edit.addEventListener("click", () => {
      this.feedbackId.style.display = "none";
    });
  },
};
const validity = {
  validName: new Boolean(),
  validEmail: new Boolean(),
  validPhone: new Boolean(),
  validMessage: new Boolean(),
};

formId.submit.addEventListener("click", checkDatasFromSubmit);
formId.name.addEventListener("blur", checkDatas);
formId.email.addEventListener("blur", checkDatas);
formId.phone.addEventListener("blur", checkDatas);
formId.message.addEventListener("blur", checkDatas);
function variablesWithValues() {
  this.name = formId.name.value;
  this.email = formId.email.value;
  this.phone = formId.phone.value;
  this.message = formId.message.value;
  this.numericals = /^[0-9]+$/;
  this.alphabets = /^[A-Za-z ]+$/;
}
function checkDatasFromSubmit() {
  checkDatas();
  if (
    validity.validMessage == true &&
    validity.validEmail == true &&
    validity.validName == true &&
    validity.validPhone == true
  ) {
    feedback.openFeedback();
  }
}
function checkDatas() {
  checkName();
  checkEmail();
  checkPhone();
  checkMessage();
  checkError();
}
const addErrorMessage = {
  errorNameAdd: function () {
    errorMessage.name.style.display = "block";
    formId.name.style.border="2px red solid";
  },
  errorEmailAdd: function () {
    errorMessage.email.style.display = "block";
    formId.email.style.border="2px red solid";

  },
  errorPhoneAdd: function () {
    errorMessage.phone.style.display = "block";
    formId.phone.style.border="2px red solid";

  },
  errorMessageAdd: function () {
    errorMessage.message.style.display = "block";
    formId.message.style.border="2px red solid";

  },
};
const removeErrorMessage = {
  errorNameRemove: function () {
    errorMessage.name.style.display = "none";
    formId.name.style.border="none";

  },
  errorEmailRemove: function () {
    errorMessage.email.style.display = "none";
    formId.email.style.border="none";

  },
  errorPhoneRemove: function () {
    errorMessage.phone.style.display = "none";
    formId.phone.style.border="none";

  },
  errorMessageRemove: function () {
    errorMessage.message.style.display = "none";
    formId.message.style.border="none";

  },
};
function checkError() {
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
  let obj = new variablesWithValues();
  if (obj.alphabets.test(obj.name) == true) {
    validity.validName = true;
  } else {
    validity.validName = false;
  }
}
function checkEmail() {
  let obj = new variablesWithValues();
  let sign1 = false;
  let sign2 = false;
  for (let key of obj.email) {
    if (key == "@") {
      sign1 = true;
      break;
    }
  }
  for (let key of obj.email) {
    if (key == ".") {
      sign2 = true;
      break;
    }
  }
  if (sign1 == true && sign2 == true) {
    validity.validEmail = true;
  } else {
    validity.validEmail = false;
  }
}
function checkPhone() {
  let obj = new variablesWithValues();
  if (obj.numericals.test(obj.phone) == true) {
    validity.validPhone = true;
  } else {
    validity.validPhone = false;
  }
}
function checkMessage() {
  let obj = new variablesWithValues();
  if (obj.message.length >= 200 || obj.message.length == 0) {
    validity.validMessage = false;
  } else {
    validity.validMessage = true;
  }
}