const score = document.querySelector(".Score");
const startscreen = document.querySelector(".StartScreen");
const gamearea = document.querySelector(".GameArea");

let player = { speed: 5, score: 0 };
let highest = 0;
startscreen.addEventListener("click", start);

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function Reset() {
  highest = 0;
}

function start() {
  startscreen.classList.add("hide");
  gamearea.innerHTML = "";

  player.start = true;
  player.score = 0;
  window.requestAnimationFrame(gamePlay);

  for (x = 0; x < 5; x++) {
    let roadline = document.createElement("div");
    roadline.setAttribute("class", "lines");
    roadline.y = x * 150;
    roadline.style.top = roadline.y + "px";
    gamearea.appendChild(roadline);
  }

  let car = document.createElement("div");
  car.setAttribute("class", "car");
  gamearea.appendChild(car);

  player.x = car.offsetLeft;
  player.y = car.offsetTop;

  for (x = 0; x < 3; x++) {
    let othercar = document.createElement("div");
    othercar.setAttribute("class", "other");
    othercar.y = (x + 1) * 350 * -1;
    othercar.style.top = othercar.y + "px";
    othercar.style.left = Math.floor(Math.random() * 350) + "px";
    gamearea.appendChild(othercar);
  }
}
