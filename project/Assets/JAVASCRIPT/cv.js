import PopFormOpenClose from "./popFormOpenClose.js";
document.getElementById("openForm").addEventListener("click", () => {
  let popFormOpenClose = new PopFormOpenClose();
  popFormOpenClose.open();
});

document.getElementById("closeForm").addEventListener("click", () => {
  let popFormOpenClose = new PopFormOpenClose();
  popFormOpenClose.close();
});
