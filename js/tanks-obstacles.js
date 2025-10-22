class Tank {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/obstaculo-pixel-project.jpg"; // asegúrate que esta ruta es correcta
    gameBoxNode.append(this.node);

    this.width = 220;
    this.height = 190;
    this.speed = 5;

    // 4 carriles (ajusta según tu fondo)
    const spawn = [100, 450, 750, 1120];
    const randomSpawn = spawn[Math.floor(Math.random() * spawn.length)];

    this.x = randomSpawn;
    this.y = gameBoxNode.offsetHeight + 100; // empieza un poco fuera de pantalla

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

// Crear tanques nuevos
function spawnTank() {
  const newTank = new Tank();
  tanksArr.push(newTank);
}

// Moverlos y eliminar los que salen
function moveTanks() {
  tanksArr.forEach((tank, index) => {
    tank.move();
    if (tank.isOutOfScreen()) {
      tank.remove();
      tanksArr.splice(index, 1);
    }
  });
}
