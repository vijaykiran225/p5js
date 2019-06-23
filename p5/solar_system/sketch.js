var sun;
var planets = [];

function setup() {
    // put setup code here
    createCanvas(500, 500);
    sun = new Planet(0, 15, null);
    for (var i = 0; i < 9; i++) {
        let aPlanet = new Planet((i * 20) + 75, i + 5, sun);
        planets.push(aPlanet);
    }
}

function draw() {
    // put drawing code here
    background(0);
    translate(width / 2, height / 2);
    sun.show();
    for (var i = 0; i < planets.length; i++) {
        planets[i].show();
        planets[i].orbit();
    }
}