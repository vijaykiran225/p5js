let angle = 0;
let cardioidPoints = [];
let heartPoints = [];

function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
}

function drawDiag(params, posX, posY, col) {
    noFill();
    stroke(col);
    push();
    translate(posX, posY);
    beginShape();
    params.forEach(element => {
        vertex(element.x, element.y);
    });
    endShape();
    pop();
}

function draw() {

    let pt = getCardioid(angle);
    cardioidPoints.push(pt);
    let hpt = getHeart(angle);
    heartPoints.push(hpt);

    drawDiag(cardioidPoints,
        width / 2,
        (height / 2) - 50,
        color(0, 255, 0));
    drawDiag(heartPoints,
        width / 2,
        height / 2,
        color(255, 10, 100));

    angle = angle + 0.01;
    if (angle >= TWO_PI) {
        noLoop();
        // angle = 0;
        // cardioidPoints = [];
        // heartPoints = [];
        // background(0);
    }
}

function getHeart(a) {
    let radius = 5;
    let x = 16 * radius * pow(sin(a), 3);
    let y = -radius * ((13 * cos(a)) - (5 * cos(2 * a)) - (2 * cos(3 * a)) - (cos(4 * a)));
    let point = {
        x: x,
        y: y
    };
    return point;
}


function getCardioid(a) {
    let radius = (1 - sin(a)) * 80;
    let x = radius * cos(a);
    let y = -radius * sin(a);
    let point = {
        x: x,
        y: y
    };
    return point;
}