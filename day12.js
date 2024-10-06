//task1
function addNums(a, b) {
  var result = a + b;
  console.log(result);
}
addNums(10, 20);
//task2
function subNums(a, b) {
  var result = b - a;
  console.log(result);
}
subNums(10, 20);
//task3
function mulNums(a, b) {
  var result = a * b;
  console.log(result);
}
mulNums(10, 20);
//task4
function divNums(a, b) {
  if (b == 0) {
    console.log("Cannot divide by zero.");
    return;
  }
  var result = a / b;
  console.log(result);
}
divNums(10, 20);
divNums(10, 0);
