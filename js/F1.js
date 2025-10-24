class f1 {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/f1.png";
    gameBoxNode.append(this.node);

    this.width = 120;
    this.height = 140;
    this.x = 305;
    this.y = 0;

    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.bottom = `${this.y}px`;
  }

  move(direction) {
    const f1Speed = 40;

    if (direction === "up") this.y += f1Speed;
    if (direction === "down") this.y -= f1Speed;
    if (direction === "left") this.x -= f1Speed;
    if (direction === "right") this.x += f1Speed;

    if (this.x < 0) this.x = 0;
    if (this.x + this.width > gameBoxNode.offsetWidth)
      this.x = gameBoxNode.offsetWidth - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > gameBoxNode.offsetHeight)
      this.y = gameBoxNode.offsetHeight - this.height;

    this.node.style.left = `${this.x}px`;
    this.node.style.bottom = `${this.y}px`;
  }

  remove() {
    this.node.remove();
  }
}
