var range=1.5;
function setup() {
    // put setup code here
    createCanvas(400, 400);
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
                real: map(i, 0, width, -range, range),
                imag: map(j, 0, height, -range, range)
            };
            var c=z;
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
            var bright = map(countForValue, 0, 100, 0, 1);
            if (exploded) {
                bright = map(sqrt(bright), 0, 1, 0, 255);
            } else {
                bright = 0;
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