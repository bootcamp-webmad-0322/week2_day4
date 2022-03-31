class Camel {

    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.camelPos = { x: posX, y: posY }
        this.camelSize = { w: width, h: height }
        this.speed = speed
        this.gameSize = gameSize

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/camel.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
    }

    move() {
        this.camelPos.x += this.speed

        if (this.camelPos.x >= this.gameSize.w - this.camelSize.w) {
            this.turnAround()
        }

        if (this.camelPos.x <= 0) {
            this.turnAround()
        }
    }

    turnAround() {
        this.speed *= -1
    }
}