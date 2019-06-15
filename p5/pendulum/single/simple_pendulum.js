var slider;
function setup() {
    // put setup code here
    createCanvas(500, 500);
    pixelDensity(1);
    slider=createSlider(0,360,45,0.5);
}
var theta = 45;
var length = 150;
var radius = 10;
var gravity = 0.1;
var angularVelocity = 0;
var damp=0.99;
var angularAcceleration = 0.01;

function draw() {
    background(0);
    fill(255, 255, 255);
    // theta=slider.value();
    text("teta is "+theta,10,10);
    text("w is "+angularVelocity,10,20);
    translate(width / 2, height / 4);
    stroke(255, 0, 0);
    strokeWeight(7);
    point(0, 0);
    strokeWeight(1);
    stroke(255, 255, 0);
    // noLoop();
    angularAcceleration = (-1*gravity/(length/2) ) * sin(theta);
    angularVelocity += angularAcceleration;
    angularVelocity *= damp;
    theta += angularVelocity;
    var startPoint = length * sin(theta);
    var endPoint = length * cos(theta) ;
    line(0, 0, startPoint, endPoint);
    ellipse(startPoint, endPoint, radius * 2, radius * 2);


}