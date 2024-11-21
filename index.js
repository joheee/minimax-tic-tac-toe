import View from "./js/view.js";

const view = new View()

const eachTiles = document.getElementsByClassName('each-tile-container')
Array.from(eachTiles).forEach(tile => {
    tile.addEventListener('click', () => {
        console.log('Tile clicked:', tile);
    });
});