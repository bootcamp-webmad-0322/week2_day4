const animatedApp = {
    name: 'Animated App',
    description: 'Canvas app for basic shapes animating',
    version: '1.0.0',
    author: 'Ger',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },

    camels: [],

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL CONTEXTO:', this.ctx)

        this.setDimensions()
        this.createCamels()
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

    createCamels() {
        this.camels.push(
            new Camel(this.ctx, this.gameSize, 100, 100, 100, 100, 5),
            new Camel(this.ctx, this.gameSize, 200, 100, 200, 200, 1.5)
        )
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 30)
    },

    drawAll() {
        this.camels.forEach(eachCamel => eachCamel.draw())
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    }
}