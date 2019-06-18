var lightningBolts = new Array();
var childBolts = new Array();
var maxBolts = 7;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    for (var i = 0; i < maxBolts; i++) {
        var start = (i + 1) * (width / maxBolts);
        lightningBolts[i] = createVector(start, 0);
    }
}

function draw() {
    // put drawing code here
    var totalHits = 0;
    for (var i = 0; i < lightningBolts.length; i++) {
        stroke(228, 0, 255, 200);
        fill(255);
        strokeWeight(4);
        point(lightningBolts[i].x, lightningBolts[i].y);
        var randomVector = p5.Vector.random2D();
        var variation = random(1, 3);
        randomVector.x = random(-variation, variation);
        randomVector.y = constrain(randomVector.y, 0, 500);
        lightningBolts[i].add(randomVector);
        if (lightningBolts[i].y >= height) {
            totalHits++;
        }
    }
    if (totalHits == maxBolts) {
        console.log("finished");
        noLoop();
    }
}