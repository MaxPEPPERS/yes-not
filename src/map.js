class Map {
    constructor(probability = 0.3) {
        this.tileSize = 40;
        this.rows = 15;
        this.cols = 20;

        // 15 rows x 20 columns
        // 1 = wall, 0 = floor
        this.grid = []
        for (let r = 0; r < this.rows; r++) {
            const row = [];
            for (let c = 0; c < this.cols; c++) {
                row.push(Math.random() < probability ? 1 : 0);
            }
            this.grid.push(row);
        }
    }

    isWall(row, col) {
        return this.grid[row][col] === 1;
    }

    render(ctx) {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                const x = col * this.tileSize;
                const y = row * this.tileSize;

                ctx.fillStyle = this.grid[row][col] === 1 ? '#4a4a4a' : '#2a2a2a';
                ctx.fillRect(x, y, this.tileSize, this.tileSize);

                ctx.strokeStyle = '#1a1a1a';
                ctx.strokeRect(x, y, this.tileSize, this.tileSize);
            }
        }
    }
}
