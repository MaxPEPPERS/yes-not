class Player {
    constructor(x, y) {
        this.x = 25;
        this.y = 25;
        this.speed = 5;
    }

update(deltaTime, keys) {
    if (keys['ArrowUp'] || keys['Keyw']) {
        this.y -= this.speed;
    }
    if (keys['ArrowDown'] || keys['Keys']) {
        this.y += this.speed;
    }
    if (keys['ArrowLeft'] || keys['Keya']) {
        this.x -= this.speed;
    }
    if (keys['ArrowRight'] || keys['Keyd']) {
        this.x += this.speed;
    }
} 
    
    render(ctx) {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, 50, 50);
    }
}
