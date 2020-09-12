
function openForm() {
  form.open();
}

function closeForm() {
  form.close();
}const form={
  open:function()
  {
    document.getElementById("myForm").style.display = "block";

  },
  close:function()
  {
    document.getElementById("myForm").style.display = "none";

  }
}
