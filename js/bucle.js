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
  let road = gamearea.getBoundingClientRect();

  if (player.start) {
    moveLines();
    moveCar(car);
    if (keys.ArrowUp && player.y > road.top + 70) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < road.bottom - 70) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < road.width - 50) {
      player.x += player.speed;
    }

    car.style.top = player.y + "px";
    car.style.left = player.x + "px";

    window.requestAnimationFrame(gamePlay);
    //console.log(player.score++);
    printResults();
  }
}
