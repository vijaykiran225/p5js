let osc;
let i = 0;
let cut = 1;
let visited = [];

let diff = 1;


let scl = 5;
let arcSize = 0;

function setup() {
    // put setup code here
    createCanvas(800, 400);
    frameRate(5);
    background(0);
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.amp(0.5);
    // osc.phase(0.3);
    osc.start();


}

function draw() {
    // put drawing code here
    // background(0);
    translate(50, height / 2);
    scale(scl);
    stroke(255, 100);
    line(0, 0, width, 0);
    noFill();
    visited[i] = true;
    let startAngle = radians(180);
    let endAngle = radians(0);
    if (cut % 2 != 0) {
        startAngle = radians(180);
        endAngle = radians(0);

    } else {
        startAngle = radians(0);
        endAngle = radians(-180);

    }

    if (i - cut <= 0 || visited[i - cut]) {
        arc((cut / 2) + i, 0, cut, cut, startAngle, endAngle);
        i = i + cut;
    } else {
        arc(i - (cut / 2), 0, cut, cut, startAngle, endAngle);
        i = i - cut;
    }

    // let f = pow(2, ((i % 88) - 49) / 12) * 440;
    osc.freq(i);

    if (mouseIsPressed) {
        osc.stop();
        noLoop();
    }
    cut++;

}