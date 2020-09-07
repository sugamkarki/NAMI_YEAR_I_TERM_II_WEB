export class sum{
 sumCheck(arr) {
  let largest = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
    sum += arr[i];
  }
  // console.log(sum)
  if (sum - largest == largest) {
    return true;
  } else {
    return false;
  }
}
}