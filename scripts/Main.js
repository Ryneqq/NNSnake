var snake;
var snakeAI;

function setup() {
    canvas = createCanvas(760, 600);
    canvas.parent('main');
    rectMode(CENTER);
    snake = new Snake();
    snake.Setup(createVector(40, 300), createVector(1, 0), 4);
}

function draw() {
    background(0);
    snake.Update();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        snake.Steer(0, -1);
    }
    if (keyCode == DOWN_ARROW) {
        snake.Steer(0, 1);
    }
    if (keyCode == LEFT_ARROW) {
        snake.Steer(-1, 0);
    }
    if (keyCode == RIGHT_ARROW) {
        snake.Steer(1, 0);
    }
}