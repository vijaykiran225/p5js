let ball;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    angleMode(DEGREES);
    ball = new Ball(200, 200, 50);
    let wind = createVector(0.0, 0.0);
    ball.applyForce(wind);
    let gravity = createVector(0, 0.1);
    ball.applyForce(gravity);
}

function draw() {
    // put drawing code here
    background(0);
    ball.move();
    ball.display();
}