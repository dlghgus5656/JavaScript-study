/*const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//array
//가져오기
console.log(daysOfWeek);
//추가하기
daysOfWeek.push("sun"); //sun을 추가

console.log(daysOfWeek[5]); // 6번째 출력
console.log(daysOfWeek);

//object 생성
const player = {
  name: "nico"
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name); //name 만 출력
player.lastName = "potato" // lastName으로 potato 추가
player.points = 15; //points를 15로 바꿈
player.points = player.points + 10 //15로 바뀐 점수에서 10을 더함 = 25
console.log(player);
*/

// Functions part One, Two
/*
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
//-------------------------------------------
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(98, 20);


const player = {
  name: "nico",
  sayHello: function (otherPersonName) {
    console.log("Hello " + otherPersonName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("hyeon");
*/
// 계산기 예제
/*
const calculator = {
  plus: function (a, b) {
    return a + b;
  },

  minus: function (a, b) {
    return a - b;
  },

  div: function (a, b) {
    return a / b;
  },

  multi: function (a, b) {
    return a * b;
  },

  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(5, 5);
const minusResult = calculator.minus(plusResult, 10);
const divResult = calculator.div(20, 10);
const multiResult = calculator.multi(30, 30);
const powerResult = calculator.power(10, 10);

console.log(plusResult);
console.log(minusResult);
console.log(divResult);
console.log(multiResult);
console.log(powerResult);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
*/

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
