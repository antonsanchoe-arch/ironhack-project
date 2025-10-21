//* DOM ELEMENTS

//Screens
const StartScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

//buttons
const StartButtonNode = document.querySelector("#start-button")

//game box
const gameBoxNode = document.querySelector("#game-box")

//* GLOBAL GAME VARIABLES

let f1Obj = null
let tanksArr = []

let gameIntervalid = null;
let tanksIntervalid = null;



//* GLOBAL GAME FUNCTIONS
function gameStart() {
    console.log("Game Started")
    

    //tog the screens
    gameScreenNode.style.display = "flex"
    StartScreenNode.style.display = "none"
    //add the initial game setup functions of the game
    
    f1Obj = new f1()
    console.log(f1Obj)

    //start the game loop
    gameIntervalid = setInterval(gameLoop, Math.floor(1000 / 60))

    //start the intervals of the game
    tanksIntervalid = setInterval(spawnTank, 1200)
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

//!collision
function checkCollisions() {
    tanksArr.forEach((tank) => {
        if (
    f1Obj.x < tank.x + tank.width &&
    f1Obj.x + f1Obj.width > tank.x &&
    f1Obj.y < tank.y + tank.height &&
    f1Obj.y + f1Obj.height > tank.y
) {
    console.log("Tank destroyed the F1! You lost!");
    gameOver();
}
        
    });
}


//* EVENT LISTENERS
StartButtonNode.addEventListener("click", gameStart);
