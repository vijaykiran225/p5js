function dft(points, side) {
    // body...
    let xK = [];
    let x = getArray(points, side);
    let N = x.length;
    for (var k = 0; k < N; k++) {
        let real = 0;
        let imag = 0;
        for (var n = 0; n < N; n++) {
            let angle = (2 * PI * k * n) / N;
            real += x[n] * cos(angle);
            imag -= x[n] * sin(angle);
        }
        real /= N;
        imag /= N;
        let amp = sqrt(real * real + imag * imag);
        let phase = atan2(imag, real);
        let eValue = {
            real: real,
            imag: imag,
            freq: k,
            phase: phase,
            amp: amp
        }
        xK[k] = eValue;
    }
    return xK;
}

function getArray(points, left) {
    // body...
    let arr = [];
    for (var i = 0; i < points.length; i++) {
        let plane = points[i];
        if (left) {
            arr.push(plane.x);
        } else {
            arr.push(plane.y);
        }
    }
    return arr;
}