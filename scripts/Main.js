let snake;
var snakeAI;

function setup() {
    canvas = createCanvas(760, 600);
    canvas.parent('main');
    ellipseMode(CENTER);
    snake = new Snake(createVector(400, 300), 40);
}

function draw() {
    background(0);
    snake.steer(mouseX - width / 2, mouseY - height / 2);
}