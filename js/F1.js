
class f1 {
    
    constructor() {

        this.node = document.createElement("img")
        this.node.src = "./images/f1.jpg"
        GameBoxNode.append(this.node)

        this.width = 100
        this.height = 100
        this.x = 15
        this.y = 40

        this.node.style.width = `${this.width}px`
        this.node.style.height = `${this.height}px`
        this.node.style.position = "absolute"
        this.node.style.bottom = `${this.y}px`
        this.node.style.left = `${this.x}px`



    }


}