// javascript로 html 정보를 가져오거나 바꿀 수 있다.
// (.hello h1)
const title = document.querySelector("div.hello:first-child h1");

title.innerText = "helloooooow";
console.dir(title);

title.style.color = "blue";

/*console에 document를 입력하면, 작성한 HTML을 가져올 수 있어.
document는 브라우저에 존재하는 object
console에 console.dir(document)를 호출해 보면, document.title이 HTML에서 정의한 title이랑 같다.
JS에서 HTML document 객체로 부터 title을 가져올 수 있다.
JS는 HTML에 접근하고 읽을 수 있게 설정되어 있어.
js를 통해 html를 바꿀 수도 있다. document.title = "HO";
모든 것들은 document로부터 시작해. web site를 의미하기 때문.
document.body를 호풀하면 body항목만 가지고 온다.

브라우저에서 그냥 사용할 수 있는 'document'라는 object를 배웠다 !
document의 함수 중에는 getElementById 라는 함수가 있는데,
이 함수가 HTML에서 id를 통해 element를 찾아준다.
element를 찾고 나면, JS로 해당 HTML의 무엇이든 바꿀 수 있다.
ex. element의 innerText를 바꾼다던가 (title.innerText = "Got you!";)
id, className 등을 가져 올 수 있음. (cosole.log(title.id);)

원하는 값을 불러오는 방법에는 여러가지 있다.

getElementById >> 하나의 값
getElementsByClassName >> 배열
getElementsByTagName . . . >> 배열

위에서 id 빼고는 배열을 가져오기 때문에 title.innerText 와 같은 방법은 사용할 수 없다.
또
Grab me3
처럼 Id를 가진 태그의 하위 태그를 선택하고 싶을 때 위의 방법으로는 한계가 있다.
이때 사용하는 게 querySelector/querySelectorAll

const title = document.querySelector(".hellos h1"); 와 같이 쓰면
.hellos h1 마치 css 선택자 처럼 원하는 요소를 선택 가능
console.log((title.innerText = "히힛")); 화면에 글자가 히힛으로 바뀐다

** 단 hello라는 class를 가진 h1태그가 여러개인 경우 querySelectorAll을 써야 한다.
선택자가 id인…
*/
