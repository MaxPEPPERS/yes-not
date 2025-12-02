class Player {
    constructor(x, y) {
        this.x = x + 15;
        this.y = y - 5;
        this.speed = 40;
    }

    update(deltaTime, keys) {
        if (keys['ArrowUp'] || keys['w']) {
            this.y -= this.speed;
            if (this.y < 0) this.y = 560; //Makes the player wrap around the screen
        }
         if (keys['ArrowDown'] || keys['s']) {
            this.y += this.speed;
            if (this.y > 560) this.y = 0;
        }
        if (keys['ArrowLeft'] || keys['a']) {
            this.x -= this.speed;
            if (this.x < 0) this.x = 760;
        }
        if (keys['ArrowRight'] || keys['d']) {
            this.x += this.speed;
            if (this.x > 760) this.x = 0;
        }
    } 
    
    render(ctx) {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, 40, 40);
    }
}
setTimeout