const TILE_SIZE = 64
const MAP_NUM_ROWS = 11
const MAP_NUM_COLLUMNS = 15

const WINDOW_WIDTH = MAP_NUM_COLLUMNS * TILE_SIZE
const WINDOW_HEIGHT = MAP_NUM_ROWS * TILE_SIZE

class Map {
  constructor () {
    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  }

  render() {
    for (let i = 0; i < MAP_NUM_ROWS; i++) {
      for (let j = 0; j < MAP_NUM_COLLUMNS; j++) {
        const tileX = j * TILE_SIZE
        const tileY = i * TILE_SIZE
        
        const tileColor = this.grid[i][j] === 1 ? "#222" : "#FFF"

        stroke("#222")
        fill(tileColor)
        rect(tileX, tileY, TILE_SIZE, TILE_SIZE)
      }
    }
  }
}

var grid = new Map();

function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT)
}

function update() {
  // todo: updtate all game objects before render the next frame
}

function draw() {
  update()
  grid.render()
}
