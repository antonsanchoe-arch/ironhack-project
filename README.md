# F1 Vs Tanks game

## [Play the Game!](https://antonsanchoe-arch.github.io/ironhack-project/)

![Game Logo](file:///C:/Users/anton/Downloads/ChatGPT%20Image%2024%20oct%202025,%2012_49_15.png)


# Description

During this game you should dodge tanks that try to destroy your F1 car, be fast and agile to not crash with them, there will be some fuel tanks that will hepl you to have a better score. Do you dare to play?


# Main functionalities

- Free movement of the F1 car on the screen
- Random spawn of the tanks
- Random spawn of the petrol cans
- Automatic score
- Lives (4 lives)
- The game is over when you crash 4 times with tanks
- Every second the score increases by
- Each petrol can increases the score by 100
- when a petrol can and a tank is hitted it disappear
- each tank appear every 1,5 seconds and each petrol can appear each 4,5 seconds


# Backlog Functionalities

- List here all functionalities you wish to add to your proyect later.

# Technologies used

- JavaScript
- Html
- CSS
- Dom manipulation
- background remover(to remove the background of images)

# States

- Sart screen
- Game screen
- Game-over screen

# Proyect Structure

- List here sections for your your different JS files.
- One for main.js to manage DOM elements, one for the Game class and one for each other class file of your game.
- Inside each file you can list the functions, clases, properties and methods of your code.

Example:

## main.js

buildDom();
main();
createStartScreen();
removeStartScreen();
createGameScreen();
removeGameScreen();
createGameOverScreen();
removeGameOverScreen();
startGame();
gameLoop();
gameOver();
spawnTank();
moveTanks();
spawnFuel();
moveFuel();
checkCollisions();
checkFuelCollection();
updateScore();


## F1.js

f1()
Properties:
  this.node;
  this.width;
  this.height;
  this.x;
  this.y;

Methods:
  move(direction);
  remove();


## Tank-obstacle.js 

Tank()
Properties:
  this.node;
  this.width;
  this.height;
  this.speed;
  this.x;
  this.y;

Methods:
  move();
  isOutOfScreen();
  remove();


## Fuel.js

Fuel()
Properties:
  this.node;
  this.width;
  this.height;
  this.speed;
  this.x;
  this.y;

Methods:
  move();
  isOutOfScreen();
  remove();


# Extra Links 

### Sketch
[Link](www.your-excalidraw-url-here.com)

### Trello
[Link](www.your-trello-url-here.com)

### Slides
[Link](https://docs.google.com/presentation/d/1Yb3fVDiojwYH0Aj34zWuIxm_nBnLddHTgBAoGwipt6g/edit?slide=id.g397da046bf3_0_58#slide=id.g397da046bf3_0_58)

## Deploy
[Link](www.your-deploy-url-here.com)
