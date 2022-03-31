const drawingApp = {
    name: 'Drawing App',
    description: 'Canvas app for basic shapes drawing',
    version: '1.0.0',
    author: 'Ger',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL CONTEXTO:', this.ctx)
        this.setDimensions()
    },

    setDimensions() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },

    drawFilledSquare() {
        this.ctx.fillRect(this.gameSize.w / 2 - 150, this.gameSize.h / 2 - 150, 300, 300)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.gameSize.w / 2 - 300, this.gameSize.h / 2 - 50, 600, 100)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.gameSize.w / 2 - 50, this.gameSize.h / 2 - 250, 100, 500)
    },

    drawLinearSquare() {
        this.ctx.strokeRect(200, 200, 300, 300)
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'blue'
        this.ctx.strokeRect(300, 300, 300, 300)
    },

    drawSolidLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(this.gameSize.w - 100, 100)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'blue'

        this.ctx.beginPath()
        this.ctx.moveTo(200, 200)
        this.ctx.lineTo(this.gameSize.w - 200, 200)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawDashedLine() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'red'

        this.ctx.beginPath()
        this.ctx.moveTo(100, 200)
        this.ctx.setLineDash([60, 20])      // <--
        this.ctx.lineTo(this.gameSize.w - 100, 200)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawArc() {
        this.ctx.fillStyle = 'red'
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'green'

        this.ctx.beginPath()
        this.ctx.arc(300, 300, 100, 0, Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()


        this.ctx.beginPath()
        this.ctx.arc(700, 300, 100, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()
    },

    write(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    },

    insertImage(imageName) {            // SOLO para canvas estáticos sin intervalo de actualización
        const imageInstance = new Image()
        imageInstance.src = `img/${imageName}`
        imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 400, 400)
    }
}