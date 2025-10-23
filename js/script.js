//* DOM ELEMENTS
const StartScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

const StartButtonNode = document.querySelector("#start-button");
const restartButtonNode = document.querySelector("#restart-button");
const backMenuButtonNode = document.querySelector("#back-to-menu-button");

const gameBoxNode = document.querySelector("#game-box");

//* GLOBAL VARIABLES
let f1Obj = null;
let tanksArr = [];

let gameIntervalid = null;
let tanksIntervalid = null;

//* GAME FUNCTIONS
function gameStart() {
  console.log("Game Started");

  // Mostrar/Ocultar pantallas
  gameScreenNode.style.display = "flex";
  StartScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "none";

  // Resetear estado del juego
  gameBoxNode.innerHTML = ""; // limpia todo el game box
  tanksArr = [];

  // Crear coche
  f1Obj = new f1();

  // Empezar bucles
  gameIntervalid = setInterval(gameLoop, Math.floor(1000 / 60));
  tanksIntervalid = setInterval(spawnTank, 1200);
}

function gameLoop() {
  moveTanks();
  checkCollisions();
}

function gameOver() {
  clearInterval(gameIntervalid);
  clearInterval(tanksIntervalid);
  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
  console.log("Game Over");
}

function checkCollisions() {
  tanksArr.forEach((tank) => {
    if (
      f1Obj.x < tank.x + tank.width &&
      f1Obj.x + f1Obj.width > tank.x &&
      f1Obj.y < tank.y + tank.height &&
      f1Obj.y + f1Obj.height > tank.y
    ) {
      console.log("Tank destroyed the F1! Game Over!");
      gameOver();
    }
  });
}

//* EVENT LISTENERS
StartButtonNode.addEventListener("click", gameStart);

restartButtonNode.addEventListener("click", () => {
  clearInterval(gameIntervalid);
  clearInterval(tanksIntervalid);
  gameStart(); // simplemente reinicia todo correctamente
});

backMenuButtonNode.addEventListener("click", () => {
  clearInterval(gameIntervalid);
  clearInterval(tanksIntervalid);
  gameOverScreenNode.style.display = "none";
  StartScreenNode.style.display = "flex";
});

//* MOVIMIENTO DEL COCHE (solo un listener global)
document.addEventListener("keydown", (e) => {
  if (!f1Obj) return; // si no hay coche, no mover
  if (e.key === "ArrowUp") f1Obj.move("up");
  if (e.key === "ArrowDown") f1Obj.move("down");
  if (e.key === "ArrowLeft") f1Obj.move("left");
  if (e.key === "ArrowRight") f1Obj.move("right");
});
