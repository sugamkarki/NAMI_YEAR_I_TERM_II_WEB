var a = "the black brown fox jumped across the river";
console.log(capitalise(a));
function capitalise(str) {
  var c = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      let d = str[i];
      d = d.toUpperCase();

      c = c + d;
      i++;
    }
    if (str[i] == " ") {
      let d = str[i + 1];
      d = d.toUpperCase();

      c = c + " " + d;
      i++;
    } else {
      c = c + str[i];
    }
  }
  return c;
}
