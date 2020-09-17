// creates and exports the class 
export default class PopFormOpenClose {
  // creates a function open()
  open() {
    // sets the display to block of the element
    document.getElementById("myForm").style.display = "block";
  }
  // creates a function close()
  close() {
    // sets the display to none of the element
    document.getElementById("myForm").style.display = "none";
  }
}
