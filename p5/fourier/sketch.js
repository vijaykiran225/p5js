 function setup() {
     // put setup code here
     createCanvas(500, 400);
 }
 let angle = 0;
 let wave = [];

 function drawEpiCircles(n) {
     // body...
     stroke(255, 100);
     strokeWeight(1);
     noFill();
     translate(200, 200);
     let x = 0;
     let y = 0;
     for (var i = 0; i < n; i++) {
         let nextOdd = 2 * i + 1;
         let rad = 50 * 4 / (PI * nextOdd);
         ellipse(x, y, rad * 2);
         x += rad * cos(nextOdd * angle);
         y += rad * sin(nextOdd * angle);
         // line(x, y, x, y);
         ellipse(x, y, 8);
     }
     line(x, y, 100, y);
     wave.unshift(y);
 }

 function draw() {
     // put drawing code here
     background(0);
     drawEpiCircles(4);
     stroke(2, 255, 0);
     beginShape();
     for (var i = wave.length - 1; i >= 0; i--) {
         vertex(i + 100, wave[i]);
     }
     endShape();
     if (wave.length >= 275) {
         wave.pop();
     }
     if (mouseIsPressed) {
         noLoop();
     }
     angle += 0.03;
 }