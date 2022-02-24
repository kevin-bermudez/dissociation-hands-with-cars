function keyDown(ev) {
  ev.preventDefault();
  keys[ev.key] = true;
}

function keyUp(ev) {
  ev.preventDefault();
  keys[ev.key] = false;
}

function isCollide(a, b) {
  aRect = a.getBoundingClientRect();
  bRect = b.getBoundingClientRect();

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}

function isCollideWithBorder() {
  let road = gamearea.getBoundingClientRect();
  let road2 = gamearea2.getBoundingClientRect();
  console.log("player data is", player);
  return (
    player.x <= 0 ||
    player.x >= road.width - 50 ||
    player.x2 <= 0 ||
    player.x2 >= road2.width - 50
  );
}

function moveCar(car) {
  let other = document.querySelectorAll(".other");
  other.forEach(function (item) {
    if (isCollide(car, item)) {
      console.log("HIT");
      endGame();
    }
    if (item.y >= 750) {
      item.y = -300;
      item.style.left = Math.floor(Math.random() * 350) + "px";
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}
