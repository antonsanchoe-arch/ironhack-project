class Fuel {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/gasolina pixel project.png";
    this.node.classList.add("fuel");
    gameBoxNode.append(this.node);

    this.width = 120;
    this.height = 100;
    this.speed = 4;

    const spawn = [100, 450, 750, 1120];
    const randomSpawn = spawn[Math.floor(Math.random() * spawn.length)];//select a randomly position from the array

    this.x = randomSpawn;
    this.y = gameBoxNode.offsetHeight + this.height;

    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.bottom = `${this.y}px`;
  }

  move() {
    this.y -= this.speed;
    this.node.style.bottom = `${this.y}px`;
  }
  //detect when the image is out of the sreen
  isOutOfScreen() {
    return this.y + this.height < 0;
  }
  //remove the image
  remove() {
    this.node.remove();
  }
}

function spawnFuel() {
  const newFuel = new Fuel();
  fuelArr.push(newFuel);
}
//remove when the fuel is out of screen
function moveFuel() {
  fuelArr.forEach((fuel, index) => {
    fuel.move();
    if (fuel.isOutOfScreen()) {
      fuel.remove();
      fuelArr.splice(index, 1);
    }
  });
}
