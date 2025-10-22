//* DOM ELEMENTS

// Screens
const StartScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

// Buttons
const StartButtonNode = document.querySelector("#start-button");

// Game box
const gameBoxNode = document.querySelector("#game-box");

//* GLOBAL GAME VARIABLES

let f1Obj = null;
let tanksArr = [];

let gameIntervalid = null;
let tanksIntervalid = null;

//* GLOBAL GAME FUNCTIONS
function gameStart() {
  console.log("Game Started");

  // Toggle the screens
  gameScreenNode.style.display = "flex";
  StartScreenNode.style.display = "none";

  // Create the car
  f1Obj = new f1();
  console.log(f1Obj);

  // Start the game loop
  gameIntervalid = setInterval(gameLoop, Math.floor(1000 / 60));

  // Spawn tanks every 1.2 seconds
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

//! Collision detection
function checkCollisions() {
  tanksArr.forEach((tank) => {
    if (
      f1Obj.x < tank.x + tank.width &&
      f1Obj.x + f1Obj.width > tank.x &&
      f1Obj.y < tank.y + tank.height &&
      f1Obj.y + f1Obj.height > tank.y
    ) {
      console.log(" Tank destroyed the F1! Game Over!");
      gameOver();
    }
  });
}

//* EVENT LISTENERS
StartButtonNode.addEventListener("click", gameStart);
