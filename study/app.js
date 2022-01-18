// []=array, {}=object, (){}=function

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
/*
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
*/

// javascript로 html 정보를 가져오거나 바꿀 수 있다.
// (.hello h1)
/*
const title = document.querySelector("div.hello:first-child h1");

title.innerText = "helloooooow";
console.dir(title);

title.style.color = "blue";
*/

//각종 이벤트
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // 클릭 시 파란색으로 색 변경
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!"; //커서 위치 시 문구 변경
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!"; //커서 아웃 시 문구 변경
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI!");
}

function handleWindowOnline() {
  alert("ALL GOOD WIFI~");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter; // 이렇게도 이벤트를 줄 수 있고
h1.addEventListener("mouseleave", handleMouseLeave); // 이렇게도 줄 수 있다. 이 방법으로 하면
//나중에 removeEventListener 을 통해서 이벤트를 제거 할 수 있다.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);//와이파이 연결 해제 시 이벤트 발생
window.addEventListener("online", handleWindowOnline);//와이파이 연결 시 이벤트 발생
*/

// 클릭 시 색 변경 반복
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = " tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/

//css 파일에서 색을 지정해서 사용한 예시
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked"; //css 에서 색 명시함
  if (h1.classList.contains(clickedClass)) //contains는 true, false 값을 반환 한다.
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
*/
//위에랑 같은 기능을 하지만 toggle을 사용 함으로써 단 한줄로 코드를 줄일 수 있는 예이다.
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked"); //toggle는 h1의 classList에 clicked class가 이미 있는지 확인해서 만약 있다면, toggle이 clicked를 제거해준다. 반대일 경우엔 toggle이 clicked를 classList에 추가를 해준다.
}

h1.addEventListener("click", handleTitleClick);
