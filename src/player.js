class Player {
    constructor(x, y) {
        this.x = x; // must be multiple of 40 for grid alignment
        this.y = y;
        this.size = 40;
        this.speed = 40; // tile-based movement
    }

    update(deltaTime, keys, map) {
        const tileSize = map.tileSize;
        let col = Math.floor(this.x / tileSize);
        let row = Math.floor(this.y / tileSize);

        if ((keys["ArrowUp"] || keys["w"]) && row > 0 && !map.isWall(row - 1, col)) {
            this.y -= this.speed;
        }
        if ((keys["ArrowDown"] || keys["s"]) && row < map.grid.length - 1 && !map.isWall(row + 1, col)) {
            this.y += this.speed;
        }
        if ((keys["ArrowLeft"] || keys["a"]) && col > 0 && !map.isWall(row, col - 1)) {
            this.x -= this.speed;
        }
        if ((keys["ArrowRight"] || keys["d"]) && col < map.grid[0].length - 1 && !map.isWall(row, col + 1)) {
            this.x += this.speed;
        }
    }

    render(ctx) {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
