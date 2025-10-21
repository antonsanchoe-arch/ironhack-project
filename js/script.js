//* DOM ELEMENTS

//Screens
const StartScreenNode = document.querySelector("#start-screen")
const GameScreenNode = document.querySelector("#game-screen")
const endScreenNode = document.querySelector("#game-over-screen")

//buttons
const StartButtonNode = document.querySelector("#start-button")

//game box
const GameBoxNode = document.querySelector("#game-box")

//* GLOBAL GAME VARIABLES

let f1Obj = null




//* GLOBAL GAME FUNCTIONS
function gameStart() {
    console.log("Game Started")


    //tog the screens
    StartScreenNode.style.display = "none"
    GameBoxNode.style.display = "flex"
    //add the initial game setup functions of the game
    
    const f1Obj = new f1()

    //start the game loop
    setInterval(gameLoop, Math.floor(1000 / 60))

    //start the entire intervals of the game
}

function gameLoop() {}



//* EVENT LISTENERS
StartButtonNode.addEventListener("click", gameStart);
