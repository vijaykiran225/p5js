function setup() {
    // put setup code here
    createCanvas(360, 360);
    pixelDensity(1);
    // background(0);
}

function mandelbrot(zn, cn) {
    // body...
    var squareReal = (zn.real * zn.real) - (zn.imag * zn.imag);
    var squareImag = 2 * zn.real * zn.imag;
    return result = {
        real: squareReal + cn.real,
        imag: squareImag + cn.imag
    };
}

function draw() {
    // put drawing code here
    loadPixels();
    for (var i = 0; i <= width; i++) {
        for (var j = 0; j <= height; j++) {
            var z = {
                real: 0,
                imag: 0
            };
            var c = {
                real: map(i, 0, width, -3.5, 3.5),
                imag: map(j, 0, height, -3.5, 3.5)
            };
            var countForValue = 0;
            var exceeded = false;
            while (countForValue < 100) {
                var zNext = mandelbrot(z, c);
                if (zNext.real >= 4) {
                    exceeded = true;
                    break;
                }
                z=zNext;
                countForValue++;
            }
            var bright = map(countForValue,0,100,0,255);
            if (!exceeded) {
                bright = 200;
            }
            var id = 4 * ((j * width) + (i));
            pixels[id] = bright;
            pixels[id + 1] = bright;
            pixels[id + 2] = bright;
            pixels[id + 3] = 255;
        }
    }
    updatePixels();
    noLoop();
}