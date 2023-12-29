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

  isWall(x, y) {
    const collumn = Math.floor(x / TILE_SIZE)
    const row = Math.floor(y / TILE_SIZE)

    return this.grid[ row ][ collumn ] === 1
  }
}

class Player {
  constructor() {
    this.x = WINDOW_WIDTH / 2;
    this.y = WINDOW_HEIGHT / 2;
    this.radius = 5;
    this.turnDirection = 0;
    this.walkDirection = 0;
    this.rotationAngle = Math.PI / 2;
    this.moveSpeed = 3;
    this.turnSpeed = 2 * (Math.PI / 180);
  }

  update() {
    this.rotationAngle += this.turnDirection * this.turnSpeed

    var moveStep = this.walkDirection * this.moveSpeed

    const x = this.x + (moveStep * Math.cos(this.rotationAngle))
    const y = this.y + (moveStep * Math.sin(this.rotationAngle))

    if (grid.isWall(x, y)) return

    this.x = x 
    this.y = y
  }

  render() {
    noStroke()
    fill('red')
    circle(this.x, this.y, this.radius)
    stroke('red')
    line(
      this.x,
      this.y,
      this.x + Math.cos(this.rotationAngle) * 40,
      this.y + Math.sin(this.rotationAngle) * 40
    )
  }
}

var grid = new Map();
var player = new Player();

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.walkDirection = 1
  }

  if (keyCode === DOWN_ARROW) {
    player.walkDirection = -1
  }

  if (keyCode === LEFT_ARROW) {
    player.turnDirection = 1
  }

  if (keyCode === RIGHT_ARROW) {
    player.turnDirection = -1
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    player.walkDirection = 0 
  }

  if (keyCode === DOWN_ARROW) {
    player.walkDirection = 0
  }

  if (keyCode === LEFT_ARROW) {
    player.turnDirection = 0
  }

  if (keyCode === RIGHT_ARROW) {
    player.turnDirection = 0
  }
}

function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT)
}

function update() {
  player.update();
}

function draw() {
  update()

  grid.render()
  player.render();
}
