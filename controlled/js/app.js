const controlledApp = {
    name: 'Animated App',
    description: 'Canvas app for basic shapes animating',
    version: '1.0.0',
    author: 'Ger',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },

    ball: undefined,

    framesIndex: 0,                 // <- ayudita


    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL CONTEXTO:', this.ctx)

        this.setDimensions()
        this.setEventListeners()
        this.createBall()
        this.start()
    },

    setDimensions() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },

    setEventListeners() {
        document.onkeyup = event => {
            const { key } = event
            if (key === 'ArrowLeft') {
                this.ball.moveLeft()
            }
            if (key === 'ArrowRight') {
                this.ball.moveRight()
            }
        }
    },

    createBall() {
        this.ball = new Ball(this.ctx, 300, 300, 100, 100)
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++      // <- ayudita
        }, 30)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawAll() {
        this.ball.draw()
        if (this.framesIndex % 30 === 0) this.createObstacle()      // <- ayudita :3
    },

    createObstacle() {
        console.log('OBSTÁCULO VA!!')
    }

}