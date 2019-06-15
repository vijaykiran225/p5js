var x =0 ;
var y =0; 

function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    x=random(-width / 2, width / 2);
    y=random(-width / 2, width / 2);
}

function ikeda(x, y, u) {
    // body...
    let t = 0.4 - (6 / (1 + (x * x) + (y * y)));
    let xn = 1 + (u * (x * cos(t) - y * sin(t)));
    let yn = u * (x * sin(t) + y * cos(t));
    return {
        x: xn,
        y: yn
    }
}

function draw() {
    translate(width / 2, height / 2);
    stroke(map(x,-width/2,width/2,0,255));
    strokeWeight(1);
    noFill();
    // beginShape();
    for (var i = 0; i < 500; i++) {
        var result = ikeda(x, y, 0.92);
        // vertex(result.x, result.y);

        // result= mapToScreen(result);
        point(result.x, result.y);
        x = result.x;
        y = result.y;
    }
    x = random(-width / 2, width / 2);
    y = random(-height / 2, height / 2);
    // endShape();
    // noLoop();
}

function mapToScreen(aPoint) {
    // body...
}