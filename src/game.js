class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.running = true;
        this.lastTime = 0;

        this.gameObjects = [];
        this.keys = {};

        this.setupInput();
    }

    setupInput() {
        window.addEventListener('keydown', e => this.keys[e.key] = true);
        window.addEventListener('keyup', e => this.keys[e.key] = false);
    }

    addGameObject(obj) {
        this.gameObjects.push(obj);
    }

    update(deltaTime) {
        this.gameObjects.forEach(obj => {
            if (obj.update) obj.update(deltaTime, this.keys, this.map);
        });
    }

    render() {
        this.ctx.fillStyle = '#1f1f1f';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.gameObjects.forEach(obj => {
            if (obj.render) obj.render(this.ctx);
        });
    }

    gameLoop = (currentTime) => {
        if (!this.running) return;
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(this.gameLoop);
    }

    start() {
        this.lastTime = performance.now();
        requestAnimationFrame(this.gameLoop);
    }
}
