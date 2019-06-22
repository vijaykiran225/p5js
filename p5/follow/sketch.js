var clock;

function setup() {
    // put setup code here
    createCanvas(600, 600);
    clock = new Clock(12, 58, 1);
}

function draw() {
    // put drawing code here
    background(0);
    clock.increment();
    clock.displayClock();
    clock.displayDigitalClock()
    // noLoop();
}