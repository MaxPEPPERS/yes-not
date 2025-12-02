/**
 * Main entry point - Initialize and start the game
 */

// Initialize the game
const game = new Game('gameCanvas');

// Create and add the map first so it renders under other objects
const map = new Map();
game.addGameObject(map);

// Create a player
const player = new Player(
    game.width / 2 - 15,
    game.height / 2 - 15
);

// Add player to game
game.addGameObject(player);

// Add a welcome message
class WelcomeText {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    update(deltaTime, keys) {
        // Static text, no update needed
    }
    
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

// Handle window resize (optional)
window.addEventListener('resize', () => {
    // You can add responsive resizing here if needed
});

console.log('Game started! Use Arrow Keys or WASD to move the player.');
