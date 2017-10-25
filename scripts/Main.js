let snake;
var snakeAI;

function setup() {
    canvas = createCanvas(760, 600);
    canvas.parent('main');
    ellipseMode(CENTER);
    snake = new Snake(createVector(400, 300), createVector(1, 0), 20);
}

function draw() {
    background(0);
    snake.move();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        snake.steer(0, -1);
    }
    if (keyCode == DOWN_ARROW) {
        snake.steer(0, 1);
    }
    if (keyCode == LEFT_ARROW) {
        snake.steer(-1, 0);
    }
    if (keyCode == RIGHT_ARROW) {
        snake.steer(1, 0);
    }
}