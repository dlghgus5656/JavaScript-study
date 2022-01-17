// Functions part One, Two

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
