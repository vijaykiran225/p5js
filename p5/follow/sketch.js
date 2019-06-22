var clock;

function setup() {
    // put setup code here
    createCanvas(600, 600);
    let now = new Date();
    clock = new Clock(now.getHours() % 12, now.getMinutes(), now.getSeconds());
}

function draw() {
    // put drawing code here
    background(51);
    frameRate(30);
    if (frameCount % 30 == 0) {
        clock.increment();
    }
    clock.displayClock();
    clock.displayDigitalClock()
    // noLoop();
}