//음주 가능여부 나이 계산기
const age = parseInt(prompt("How old are you?"));

//console.log(isNaN(age));
// && = AND, || = OR, === = 같다면?, !== = 같지 않다면?
if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 19) {
  console.log("you are too young.");
} else if (age >= 19 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 90) {
  console.log("you can't drink");
} else if (age === 100) {
  console.log("wow you are wise");
}
