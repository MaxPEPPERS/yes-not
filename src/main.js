// Initialize the game
const game = new Game('gameCanvas');

// Create map first
const map = new Map();
game.map = map; // store map for collision
game.addGameObject(map);

// Create player aligned with grid
const player = new Player(8 * 40, 7 * 40);
game.addGameObject(player);

// Add welcome text
class WelcomeText {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(deltaTime, keys) {}
    render(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Welcome to Your Game!', this.x, this.y);

        ctx.font = '16px Arial';
        ctx.fillStyle = '#a0a0a0';
        ctx.fillText('Use Arrow Keys or WASD to move', this.x, this.y + 30);
    }
}

const welcomeText = new WelcomeText(game.width / 2, 50);
game.addGameObject(welcomeText);

// Start the game
game.start();

console.log('Game started! Use Arrow Keys or WASD to move the player.');
