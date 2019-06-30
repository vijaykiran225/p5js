let particles = [];
let n = 10;
let font;
// let img;
function preload() {
    font = loadFont('Knul-Regular.otf');
    // img = loadImage('chandler.png');
}

function setup() {
    // put setup code here
    createCanvas(850, 400);
    let points = font.textToPoints('ENDGAME', 0, height / 2, 125);
    for (var i = 0; i < points.length; i++) {
        let x = random(width);
        let y = random(height);
        particles.push(new Particle(x, y, points[i]));
    }
}

function draw() {
    // put drawing code here
    background(0);
    for (var i = particles.length - 1; i >= 0; i--) {
        particles[i].act();
        particles[i].update();
        particles[i].display();
    }
}