//* DOM ELEMENTS
const StartScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

const StartButtonNode = document.querySelector("#start-button");
const restartButtonNode = document.querySelector("#restart-button");
const backMenuButtonNode = document.querySelector("#back-to-menu-button");

const gameBoxNode = document.querySelector("#game-box");

const scorePanel = document.querySelector("#score-panel");
const scoreDisplay = document.querySelector("#score-display");

//* GLOBAL VARIABLES
let f1Obj = null;
let tanksArr = [];
let fuelArr = [];

let gameIntervalid = null;
let tanksIntervalid = null;
let fuelIntervalid = null;
let scoreIntervalid = null;

let score = 0;

let lives = 4;
const livesPanel = document.querySelector("#lives");

//* GAME FUNCTIONS
function gameStart() {
  console.log("Game Started");

  gameScreenNode.style.display = "flex";
  StartScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "none";
 //remove elements from the previous game
  gameBoxNode.innerHTML = "";
  tanksArr = [];
  fuelArr = [];

  f1Obj = new f1();

  gameIntervalid = setInterval(gameLoop, 1000 / 60);
  tanksIntervalid = setInterval(spawnTank, 1200);
  fuelIntervalid = setInterval(spawnFuel, 4500);
  //reboots the score
  score = 0;
  scorePanel.textContent = `Score: ${score}`;
  //+1/s in the score
  scoreIntervalid = setInterval(() => {
    score++;
    scorePanel.textContent = `Score: ${score}`;
  }, 1000);

  //reset lives
  lives = 4;
  livesPanel.innerHTML = `
    <img class="life" src="./images/rueda-pixel-project.jpg" alt="life">
    <img class="life" src="./images/rueda-pixel-project.jpg" alt="life">
    <img class="life" src="./images/rueda-pixel-project.jpg" alt="life">
    <img class="life" src="./images/rueda-pixel-project.jpg" alt="life">`;
}

function gameLoop() {
  moveTanks();
  checkCollisions();
  moveFuel();
  checkFuelCollection();
}

function gameOver() {
  clearInterval(gameIntervalid);
  clearInterval(tanksIntervalid);
  clearInterval(scoreIntervalid);
  clearInterval(fuelIntervalid);

  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
  //final score
  scoreDisplay.textContent = `Final Score: ${score}`;
}

function checkCollisions() {
  tanksArr.forEach((tank, index) => {
    if (
      f1Obj.x < tank.x + tank.width &&
      f1Obj.x + f1Obj.width > tank.x &&
      f1Obj.y < tank.y + tank.height &&
      f1Obj.y + f1Obj.height > tank.y
    ) {
      console.log(" Colisión con tanque!");

      // Eliminar el tanque de collision
      tank.remove();
      tanksArr.splice(index, 1);

      // Quitar una vida
      lives--;
      //remove a wheel(live)
      const lifeImages = document.querySelectorAll("#lives .life");
      if (lifeImages.length > 0) {
        lifeImages[lifeImages.length - 1].remove(); // elimina la última rueda
      }

      // Si no quedan vidas -> game over
      if (lives <= 0) {
        console.log(" GAME OVER!");
        gameOver();
      }
    }
  });
}


function checkFuelCollection() {
  fuelArr.forEach((fuel, index) => {
    if (
      f1Obj.x < fuel.x + fuel.width &&
      f1Obj.x + f1Obj.width > fuel.x &&
      f1Obj.y < fuel.y + fuel.height &&
      f1Obj.y + f1Obj.height > fuel.y
    ) {
      score += 100;
      scorePanel.textContent = `Score: ${score}`;
      fuel.remove();
      fuelArr.splice(index, 1);
    }
  });
}

//* EVENT LISTENERS
StartButtonNode.addEventListener("click", gameStart);

restartButtonNode.addEventListener("click", () => {
  clearInterval(gameIntervalid);
  clearInterval(tanksIntervalid);
  clearInterval(scoreIntervalid);
  clearInterval(fuelIntervalid);
  gameStart();
});

backMenuButtonNode.addEventListener("click", () => {
  clearInterval(gameIntervalid);
  clearInterval(tanksIntervalid);
  clearInterval(scoreIntervalid);
  clearInterval(fuelIntervalid);
  gameOverScreenNode.style.display = "none";
  StartScreenNode.style.display = "flex";
});

//* MOVIMIENTO DEL COCHE
document.addEventListener("keydown", (e) => {
  if (!f1Obj) return;
  if (e.key === "ArrowUp") f1Obj.move("up");
  if (e.key === "ArrowDown") f1Obj.move("down");
  if (e.key === "ArrowLeft") f1Obj.move("left");
  if (e.key === "ArrowRight") f1Obj.move("right");
});
