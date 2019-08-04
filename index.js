import Game from './src/game.js';
import View from './src/view.js';

const root = document.querySelector('#root')

const game = new Game();
const view = new View(root, 480, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 37: // LEFT
            game.moveLeft();
            view.render(game.getState());
            break;
        case 38: // UP
            game.rotatePiece();
            view.render(game.getState());
            break;
        case 39: // RIGHT
            game.moveRight();
            view.render(game.getState());
            break;
        case 40: // DOWN
            game.moveDown();
            view.render(game.getState());        
        default:
            break;
    }
})

// render main game
view.renderMainScreen(game.getState());
