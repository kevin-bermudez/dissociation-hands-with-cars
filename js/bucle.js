function printResults() {
  player.score++;
  if (player.score >= highest) {
    highest = player.score;
  }
  score.innerHTML =
    "Tu puntaje:" + player.score + "<br><br>" + "El mayor puntaje:" + highest;
}

function moveLines() {
  let lines = document.querySelectorAll(".lines");
  lines.forEach(function (item) {
    if (item.y >= 700) {
      item.y -= 750;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function endGame() {
  player.start = false;
  startscreen.classList.remove("hide");
}

function gamePlay() {
  let car = document.querySelector(".car");
  let car2 = document.querySelector(".car2");

  let road = gamearea.getBoundingClientRect();
  let road2 = gamearea2.getBoundingClientRect();

  if (player.start) {
    moveLines();
    moveCar(car);
    moveCar(car2);

    if (keys.w && player.y > road.top + 70) {
      player.y -= player.speedCar;
    }
    if (keys.s && player.y < road.bottom - 70) {
      player.y += player.speedCar;
    }
    if (keys.a && player.x > 0) {
      player.x -= player.speedCar;
    }
    if (keys.d && player.x < road.width - 50) {
      player.x += player.speedCar;
    }

    if (keys.ArrowUp && player.y2 > road.top + 70) {
      player.y2 -= player.speedCar;
    }
    if (keys.ArrowDown && player.y2 < road.bottom - 70) {
      player.y2 += player.speedCar;
    }
    if (keys.ArrowLeft && player.x2 > 0) {
      player.x2 -= player.speedCar;
    }
    if (keys.ArrowRight && player.x2 < road.width - 50) {
      player.x2 += player.speedCar;
    }

    car.style.top = player.y + "px";
    car.style.left = player.x + "px";

    car2.style.top = player.y2 + "px";
    car2.style.left = player.x2 + "px";

    window.requestAnimationFrame(gamePlay);
    //console.log(player.score++);
    printResults();
  }
}
