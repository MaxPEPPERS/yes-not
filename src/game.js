/**
 * Game class - Main game engine
 */
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        this.running = true;
        this.fps = 60;
        this.frameTime = 1000 / this.fps;
        this.lastTime = 0;
        
        this.gameObjects = [];
        
        // Setup input handling
        this.setupInput();
    }
    
    setupInput() {
        this.keys = {};
        
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });
        
        this.canvas.addEventListener('click', (e) => {
            this.handleClick(e);
        });
    }
    
    handleClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Dispatch click event to game objects
        this.gameObjects.forEach(obj => {
            if (obj.onClick && obj.isPointInside(x, y)) {
                obj.onClick();
            }
        });
    }
    
    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }
    
    removeGameObject(gameObject) {
        const index = this.gameObjects.indexOf(gameObject);
        if (index > -1) {
            this.gameObjects.splice(index, 1);
        }
    }
    
    update(deltaTime) {
        this.gameObjects.forEach(obj => {
            if (obj.update) {
                obj.update(deltaTime, this.keys);
            }
        });
    }
    
    render() {
        // Clear canvas
        this.ctx.fillStyle = '#1f1f1f';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Render all game objects
        this.gameObjects.forEach(obj => {
            if (obj.render) {
                obj.render(this.ctx);
            }
        });
    }
    
    gameLoop = (currentTime) => {
        if (!this.running) return;
        
        // Calculate delta time
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        // Update game state
        this.update(deltaTime);
        
        // Render game
        this.render();
        
        // Continue loop
        requestAnimationFrame(this.gameLoop);
    }
    
    start() {
        this.lastTime = performance.now();
        requestAnimationFrame(this.gameLoop);
    }
    
    stop() {
        this.running = false;
    }
}
