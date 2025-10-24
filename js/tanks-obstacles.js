class Tank {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/obstaculo-pixel-project.png";
    gameBoxNode.append(this.node);

    this.width = 220;
    this.height = 190;
    this.speed = 5;

    const spawn = [90, 420, 720, 1050];
    const randomSpawn = spawn[Math.floor(Math.random() * spawn.length)];

    this.x = randomSpawn;
    this.y = gameBoxNode.offsetHeight + 100;

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

  isOutOfScreen() {
    return this.y + this.height < 0;
  }

  remove() {
    this.node.remove();
  }
}

function spawnTank() {
  const newTank = new Tank();
  tanksArr.push(newTank);
}

function moveTanks() {
  tanksArr.forEach((tank, index) => {
    tank.move();
    if (tank.isOutOfScreen()) {
      tank.remove();
      tanksArr.splice(index, 1);
    }
  });
}
