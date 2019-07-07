 let font;
 const FOURIER_DRAW = 0;
 const USER_DRAW = 1;
 let fourierX = [];
 let fourierY = [];
 let angle = 0;
 let wave = [];
 let buttonToggle;

 let action = USER_DRAW;

 let img;

 function preload() {
     //  font = loadFont('Knul-Regular.otf');
     img = loadImage('thanos.png');
 }

 function setup() {
     // put setup code here
     createCanvas(800, 600);
     background(0);
     buttonToggle = createButton("toggle");
     buttonToggle.mousePressed(toggle);

 }

 function drawEpiCircles(x, y, rotation, arr) {
     // body...
     stroke(255, 100);
     strokeWeight(1);
     noFill();
     for (var i = 0; i < arr.length; i++) {
         // let nextOdd = 2 * i + 1;
         // let rad = 50 * 4 / (PI * nextOdd);
         // ellipse(x, y, rad * 2);
         // x += rad * cos(nextOdd * angle);
         // y += rad * sin(nextOdd * angle);
         // // line(x, y, x, y);
         // ellipse(x, y, 8);
         let prevX = x;
         let prevY = y;
         let rad = arr[i].amp;
         let freq = arr[i].freq;
         let phase = arr[i].phase;
         // ellipse(x, y, rad);
         x += rad * cos(freq * angle + phase + rotation);
         y += rad * sin(freq * angle + phase + rotation);
         // line(x, y, x, y);
         ellipse(prevX, prevY, rad * 2);
         line(prevX, prevY, x, y);
     }
     return createVector(x, y);
 }

 function normalize(arr) {
     let normalizedValue = [];
     for (let index = 0; index < arr.length; index++) {
         const element = arr[index];
         element.x = map(element.x, 0, width, 0, 400);
         element.y = map(element.y, 0, height, 0, 400);
         normalizedValue.push(element);
     }
     return normalizedValue;
 }

 function do_calc() {
     //  let points = font.textToPoints("Vijay", 0, 0, 100);
     //  // let points = [];
     //  // for (var i = 0; i < 100; i++) {
     //  //     let ang = map(i, 0, 100, 0, 360);
     //  //     let point = {
     //  //         x: 75 * cos(ang),
     //  //         y: 75 * sin(ang)
     //  //     }
     //  //     points.push(point);
     //  // }

     points = normalize(mousePath);

     print(points);
     fourierX = dft(points, true);
     fourierY = dft(points, false);
     print(fourierX);
     print(fourierY);
     fourierX.sort((a, b) => b.amp - a.amp);
     fourierY.sort((a, b) => b.amp - a.amp);
 }

 let mousePath = [];

 function mouseDragged() {
     let mouseLoc = {
         x: mouseX,
         y: mouseY
     };
     mousePath.push(mouseLoc);

 }

 function draw() {
     if (action == USER_DRAW) {
         path_draw();
     } else {

         epicy_draw();
     }
 }


 function path_draw() {
     stroke(255);
     background(0);
     noFill();
     beginShape();
     for (let index = 0; index < mousePath.length; index++) {
         const element = mousePath[index];
         vertex(element.x, element.y);
     }
     endShape();

 }

 function epicy_draw() {
     // put drawing code here
     background(0);
     let vx = drawEpiCircles(300, 50, 0, fourierX);
     let vy = drawEpiCircles(50, 200, HALF_PI, fourierY);
     let v = createVector(vx.x, vy.y);
     line(vx.x, vx.y, v.x, v.y);
     line(vy.x, vy.y, v.x, v.y);
     wave.unshift(v);
     stroke(2, 255, 0);
     beginShape();
     noFill();
     for (var i = 0; i < wave.length; i++) {
         vertex(wave[i].x, wave[i].y);
     }
     endShape();
     let dt = (TWO_PI) / (fourierY.length);
     if (angle + dt >= TWO_PI) {
         angle = 0;
         wave = [];

     }
     angle += dt;
 }

 function vijaydraw() {
     // put drawing code here
     background(0);
     drawEpiCircles(4);
     stroke(2, 255, 0);
     beginShape();
     for (var i = wave.length - 1; i >= 0; i--) {
         vertex(i + 100, wave[i]);
     }
     endShape();
     // if (wave.length >= 275) {
     //     wave.pop();
     // }
     if (mouseIsPressed) {
         noLoop();
     }
     angle += 0.03;
 }


 function toggle() {
     if (action == USER_DRAW) {
         action = FOURIER_DRAW;
         wave = [];
         fourierX = [];
         angle = 0;
         fourierY = [];
         do_calc();
     } else if (action == FOURIER_DRAW) {
         action = USER_DRAW;
         mousePath = [];
     }
     background(0);


 }