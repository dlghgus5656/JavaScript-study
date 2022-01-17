// 계산기 예제

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
