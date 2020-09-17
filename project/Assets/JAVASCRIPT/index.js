// imports PopFormOpenClose from ./popFormOpenClose.js module
import PopFormOpenClose from "./popFormOpenClose.js";
// adds event listener to openForm
document.getElementById("openForm").addEventListener("click", () => {
  // creates an instance of the imported class
  let popFormOpenClose = new PopFormOpenClose();
  // calls the function of the class
  popFormOpenClose.open();
});

document.getElementById("closeForm").addEventListener("click", () => {
  // creates an instance of the imported class
  let popFormOpenClose = new PopFormOpenClose();
  // calls the function of the class
  popFormOpenClose.close();
});