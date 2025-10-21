class Tank {
    constructor() {
        this.node = document.createElement("img");
        this.node.src = "./images/obstaculo-pixel-project.jpg";
        gameBoxNode.append(this.node);

        this.width = 100;
        this.height = 130;
        this.speed = 5;

        //spawn aleatorio
        const spawn = [305, 505, 705, 905];
        const randomSpawn = spawn[Math.floor(Math.random() * spawn.length)]

        this.x = randomSpawn
        this.y = -this.height;

        this.node.style.width = `${this.width}px`;
        this.node.style.height = `${this.height}px`;
        this.node.style.position = "absolute";
        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;

    }

        move() {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
}

isOutOfScreen() {
    return this.y > gameBoxNode.offsetHeight;
};

remove() {
    this.node.remove();
}





}

//tanks spawn
function spawnTank() {
    const newTank = new Tank();
    tanksArr.push(newTank);
}

//Move tanks and elminate the previous ones
function moveTanks() {
    tanksArr.forEach((tank, index) => {
        tank.move();
        if (tank.isOutOfScreen()) {
            tank.remove();
            tanksArr.splice(index, 1);
        }
    });
}
  