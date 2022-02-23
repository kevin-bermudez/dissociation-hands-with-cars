const score = document.querySelector(".Score");
const startscreen = document.querySelector(".StartScreen");
const gamearea = document.querySelector(".GameArea");
const gamearea2 = document.querySelector(".GameArea2");

let player = { speed: 1, score: 0, speedCar: 5 };
let highest = 0;
startscreen.addEventListener("click", start);

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
  w: false,
  s: false,
  d: false,
  a: false,
};

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function Reset() {
  highest = 0;
}

function start() {
  startscreen.classList.add("hide");
  gamearea.innerHTML = "";
  gamearea2.innerHTML = "";

  player.start = true;
  player.score = 0;
  window.requestAnimationFrame(gamePlay);

  for (x = 0; x < 5; x++) {
    let roadline = document.createElement("div");
    roadline.setAttribute("class", "lines");
    roadline.y = x * 150;
    roadline.style.top = roadline.y + "px";
    gamearea.appendChild(roadline);

    let roadline2 = document.createElement("div");
    roadline2.setAttribute("class", "lines2");
    roadline2.y = x * 150;
    roadline2.style.top = roadline.y + "px";
    gamearea.appendChild(roadline);
    gamearea2.appendChild(roadline2);
  }

  let car = document.createElement("div");
  car.setAttribute("class", "car");
  gamearea.appendChild(car);

  let car2 = document.createElement("div");
  car2.setAttribute("class", "car2");
  gamearea2.appendChild(car2);

  player.x = car.offsetLeft;
  player.y = car.offsetTop;

  player.x2 = car2.offsetLeft;
  player.y2 = car2.offsetTop;

  for (x = 0; x < 3; x++) {
    let othercar = document.createElement("div");
    othercar.setAttribute("class", "other");
    othercar.y = (x + 1) * 350 * -1;
    othercar.style.top = othercar.y + "px";
    othercar.style.left = Math.floor(Math.random() * 350) + "px";

    gamearea.appendChild(othercar);

    let othercar2 = document.createElement("div");
    othercar2.setAttribute("class", "other");
    othercar2.y = (x + 1) * 350 * -1;
    othercar2.style.top = othercar.y + "px";
    othercar2.style.left = Math.floor(Math.random() * 350) + "px";

    gamearea2.appendChild(othercar2);
  }
}
