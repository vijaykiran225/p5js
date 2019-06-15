var fernX = 0;
var fernY = 0;

function setup() {
    // put setup code here
    createCanvas(500, 500);
    background(0);
}
var fn={
   
};
function draw() {
    // put drawing code here
    stroke(fn.colorRed,fn.colorGreen,fn.colorBlue);
    strokeWeight(4);
    
    var x=map(fernX,-2.1820,2.6558,0,width);
    var y= map(fernY,0,9.9983,height,0);

    point(x, y);
    fn = getFnValue();
    var top = ((fn.a * fernX) + (fn.b * fernY)) + (fn.e);
    var bottom = ((fn.c * fernX) + (fn.d * fernY) )+ (fn.f);
    fernX = top;
    fernY = bottom;
    // noLoop();
}

function getFnValue() {
    // body...
    var r = random(1);
    if (r <= 0.01) {
        return {
            a: 0,
            b: 0,
            c: 0,
            d: 0.16,
            e: 0,
            f: 0,
            colorRed:255,
            colorGreen:255,
            colorBlue:255
        };
    } else if (r <= 0.85) {
        return {
            a: 0.85,
            b: 0.04,
            c: -0.04,
            d: 0.85,
            e: 0,
            f: 1.60,
            colorRed:5,
            colorGreen:255,
            colorBlue:0
        };
    } else if (r <= 0.93) {
        return {
            a: 0.20,
            b: -0.26,
            c: 0.23,
            d: 0.22,
            e: 0,
            f: 1.60,
            colorRed:255,
            colorGreen:0,
            colorBlue:25
        };
    } else {
        return {
            a: -0.15,
            b: 0.28,
            c: 0.26,
            d: 0.24,
            e: 0,
            f: 0.44,
            colorRed:255,
            colorGreen:25,
            colorBlue:0
        };
    }
}