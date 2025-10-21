
class f1 {
    
    constructor() {

        this.node = document.createElement("img")
        this.node.src = "./images/f1.jpg"
        gameBoxNode.append(this.node)

        this.width = 100
        this.height = 130
        this.x = 305
        this.y = 0

        this.node.style.width = `${this.width}px`
        this.node.style.height = `${this.height}px`
        this.node.style.position = "absolute"
        this.node.style.bottom = `${this.y}px`
        this.node.style.left = `${this.x}px`

        //move the F1
        document.addEventListener("keydown", (e) => {
    const f1Speed = 15;

    if (e.key === "ArrowUp") this.y += f1Speed;
    if (e.key === "ArrowDown") this.y -= f1Speed;
    if (e.key === "ArrowLeft") this.x -= f1Speed;
    if (e.key === "ArrowRight") this.x += f1Speed;

    // Limites del gameBox
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > gameBoxNode.offsetWidth)
        this.x = gameBoxNode.offsetWidth - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > gameBoxNode.offsetHeight)
        this.y = gameBoxNode.offsetHeight - this.height;

    // Actualizar posición visual
    this.node.style.left = `${this.x}px`;
    this.node.style.bottom = `${this.y}px`;
});
    }
}