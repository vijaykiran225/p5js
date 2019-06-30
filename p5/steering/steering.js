var mouseVector;
var mover;

function setup() {
    // put setup code here
    createCanvas(500, 500);
    mover = new Mover(420, 20);
}

function draw() {
    background(51);
    mouseVector = createVector(30, 5);
    stroke(125);
    strokeWeight(3);
    point(mouseVector.x, mouseVector.y);
    mover.seek(mouseVector);
    mover.show();
}