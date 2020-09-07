console.log(pattern([2, 4, 6, 8]));
console.log(pattern([3, 9, 27, 81]));
console.log(pattern([1, 71, 100, 108]));
function pattern(arr) {
  if (checkArithmetic(arr) == "arithmetic") {
    return "arithmetic";
  } else if (checkGeometric(arr) == "geometric") {
    return "geometric";
  } else {
    return -1;
  }
}
function checkGeometric(arr) {
  let length = arr.length;
  console.log(length);
  for (let i = 1; i < length; i++) {
    var validate = false;
    if (arr[i] == arr[i - 1] * arr[0]) {
      validate = true;
    } else {
      validate = false;
      break;
    }
  }
  if (validate == true) {
    return "geometric";
  }
}
function checkArithmetic(arr) {
  let length = arr.length;
  // console.log(length);

  for (let i = 1; i < length; i++) {
    var val = false;

    if (arr[i] == arr[i - 1] + arr[0]) {
      // return "arithmetic"
      val = true;
    } else {
      // return false;
      val = false;
      // break;
    }
    // }
  }
  if (val == true) {
    return "arithmetic";
  } else {
    return -1;
  }
}
