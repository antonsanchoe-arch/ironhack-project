class fuel {
    constructor() {
        this.node = document.createElement("img");
        this.node.src = "../images/gasolina pixel project.jpg";
        this.node.classList.add("fuel");
        gameBoxNode.append(this.node);

        this.width = 80;
        this.height = 100;
        this.speed = 4

        const spawn = [100, 450, 750, 1120];
        const randomSpawn = spawn[Math.floor(Math.random() * spawn.length)];

        this.x = randomSpawn;
        this.y = -this.height;

        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;
    }

    move() {
        this.y += this.speed;
        this.node.style.top = `${this.y}px`;
    }

    isOutOfScreen() {
        return this.y > gameBoxNode.offsetHeight;
    }

    remove() {
        this.node.remove();
    }
}

function spawnFuel() {
    const newFuel = new fuel();
    fuelArr.push(newFuel);
}

function moveFuel() {
    fuelArr.forEach((fuel, index) => {
        fuel.move();
        if (fuel.isOutOfScreen()) {
            fuel.remove();
            fuelArr.splice(index, 1);
        }
    })
}