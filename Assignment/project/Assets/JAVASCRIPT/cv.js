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