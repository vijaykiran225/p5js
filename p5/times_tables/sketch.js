var radius = 100;
var parts = 10;
var eachPartAngle = 0;
var slider;
var multiplierAmount = 20;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    slider = createSlider(1, 500, 1);
}

function draw() {
    // put drawing code here
    clear();
    // background(0);
    parts = slider.value();
    textSize(10);
    // fill(255);
    text("Current Value is " + parts, 10, 10);
    text("Multipler Value is " + multiplierAmount, 10, 20);
    translate(width / 2, height / 2);
    var vjPoints = [];
    for (var i = 0; i < parts; i++) {
        eachPartAngle = eachPartAngle + (TWO_PI / parts);
        var x = radius * cos(eachPartAngle);
        var y = radius * sin(eachPartAngle);
        stroke(0, 255, 0);
        strokeWeight(4);
        point(x, y);
        var vjPoint = {
            posX: x,
            posY: y
        };
        vjPoints[i] = vjPoint;
    }
    // print(vjPoints)
    for (var i = 0; i < vjPoints.length; i++) {
        var targetId = (i * multiplierAmount) % parts;
        stroke(255, 0, 0);
        strokeWeight(1);
        var curr = vjPoints[i];
        var targetPoint = vjPoints[targetId];
        line(curr.posX, curr.posY, targetPoint.posX, targetPoint.posY);
    }
}