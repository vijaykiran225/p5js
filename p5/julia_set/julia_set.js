var sliderReal;
var sliderImag;

function setup() {
    // put setup code here
    createCanvas(500, 500);
    pixelDensity(1);
    // background(255,55,55);
    sliderReal = createSlider(0, 1000, 250, 1);
    sliderImag = createSlider(0, 1000, 625, 1);
}

function mandelbrot(zn, cn) {
    // body...
    var squareReal = (zn.real * zn.real) - (zn.imag * zn.imag);
    var squareImag = 2.0 * zn.real * zn.imag;
    return result = {
        real: squareReal + cn.real,
        imag: squareImag + cn.imag
    };
}
var theta = 0;

function draw() {
    // put drawing code here
    var c  = {
        real: map(sliderReal.value(), 0, 1000, -2.5, 2.5),
        imag: -map(sliderImag.value(), 0, 1000, -2.5, 2.5)
    };
    // var c = {
    //     real: 0.285,
    //     imag: sin(theta)
    // };
    var total = 0;
    var n=0;
    loadPixels();
    for (var i = 0; i <= width; i++) {
        for (var j = 0; j <= height; j++) {
        	n++;
            var z = {
                real: map(i, 0, width, -2.5, 2.5),
                imag: map(j, 0, height, -2.25, 2.25)
            };
            var countForValue = 0;
            var exploded = false;
            while (countForValue < 100) {
                var zNext = mandelbrot(z, c);
                if (zNext.real >= 4) {
                    exploded = true;
                    break;
                }
                z = zNext;
                countForValue++;
            }
            var red = 0;
            var green = 0;
            var blue = 0;
            if (exploded) {
               
                red=0;
                //map(countForValue, 0, 100, 0, 255); 
                green = 0;// map(countForValue, 0, 100, 0, 255);
                blue=map(countForValue, 0, 100, 0, 255);
            } else {
                red = 0;
                green = 255;
                blue = 5;
            }
            total = total + countForValue;
            var id = 4 * ((j * width) + (i));
            pixels[id] = red;
            pixels[id + 1] = green;
            pixels[id + 2] = blue;
            pixels[id + 3] = 255;
        }
    }
    updatePixels();
    fill(255, 255, 255);
    text("real " + c.real, 10, 10);
    text("imag " + c.imag, 10, 20);
    text("slid real " + sliderReal.value(), 10, 30);
    text("slid imag " + sliderImag.value(), 10, 40);
    text("total c" + total, 10, 50);
    theta += 0.01;
    // noLoop();
    // c.imag+=0.001;
    // if(c.imag >=1){
    // c.imag=-0.75;
    // }
}