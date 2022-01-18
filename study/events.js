//각종 이벤트

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
window.addEventListener("offline", handleWindowOffline); //와이파이 연결 해제 시 이벤트 발생
window.addEventListener("online", handleWindowOnline); //와이파이 연결 시 이벤트 발생

/*
* javascript가 document로 html을 불러올 수 있고 수정 추가도 가능하다*

1.불러오는 함수
querySelector/ querySelectorAll 이 유용하다.
2.사용자의 event를 listen해서 반응
addEventListener("event", function);
**이때 function에 실행 하는 () 기호는 쓰지 않는다. 우리가 원하는 건
이벤트 발생 시 함수가 실행 되는 것이기 때문에 ()를 임의로 쓰면 이벤트 발생 전에 실행됨.
3.바꿀 수 있는 property 중 style도 있다.
title.style.color = "blue"; 혹은
function changeColor() {
title.style.color = "blue";
}
title.addEventListener("click", changeColor); 처럼 쓸 수 있다.

title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

document에서 body,head,title 은 중요해서 언제든
ex) document.body 로 가져올수있지만
div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
ex) document.querySelector(“h1”);

window는 기본제공
function handleWindowResize(){
document.body.style.backgroundColor = “tomato”;
}
function handleWindowCopy(){
alert(“copier”);
}

window.addEventListener(“resize”, handleWindowResize);
window.addEventListener(“copy”, handleWindowCopy);


1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.

이를 토대로 코드를 순차적으로 이해하면,

1) click event 발생 및 함수 실행
2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
3) newColor 변수 선언
4) currentColor 현재 값 확인
5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
6) 마지막으로 h1.style.color에 newColor값 대입 (setter)
*/
