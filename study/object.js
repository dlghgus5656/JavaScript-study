//object 생성
const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name); //name 만 출력
player.lastName = "potato"; // lastName으로 potato 추가
player.points = 15; //points를 15로 바꿈
player.points = player.points + 10; //15로 바뀐 점수에서 10을 더함 = 25
console.log(player);
