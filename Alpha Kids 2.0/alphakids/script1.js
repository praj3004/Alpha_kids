const grid = document.getElementById('grid');
const shuffleButton = document.getElementById('shuffle-button');
let tiles = Array.from(Array(15).keys()).map(i => i + 1).concat(null); // Create an array [1, 2, ..., 15, null]

// Function to create the puzzle grid
function createGrid() {
    grid.innerHTML = '';
    tiles.forEach(tile => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        if (tile) {
            tileElement.textContent = tile;
            tileElement.addEventListener('click', () => moveTile(tile));
        } else {
            tileElement.classList.add('empty');
        }
        grid.appendChild(tileElement);
    });
}

// Function to shuffle the tiles
function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    createGrid();
}

// Function to move a tile
function moveTile(tile) {
    const emptyIndex = tiles.indexOf(null);
    const tileIndex = tiles.indexOf(tile);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 4, emptyIndex + 4];

    if (validMoves.includes(tileIndex)) {
        tiles[emptyIndex] = tile;
        tiles[tileIndex] = null;
        createGrid();
    }
}

// Event listener for the shuffle button
shuffleButton.addEventListener('click', shuffleTiles);

// Initial grid creation
createGrid();
