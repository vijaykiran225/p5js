class Clock {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.hourDisp = 25;
        this.minDisp = 50;
        this.secDisp = 75;
        this.hourAngle = 0;
        this.minAngle = 0;
        this.secAngle = 0;
        this.normalize();
        this.updateAngles();
    }
    normalize() {
        this.hour = constrain(this.hour, 0, 11);
        this.minute = constrain(this.minute, 0, 59);
        this.second = constrain(this.second, 0, 59);
    }
    showNumbers(n, length) {
        push();
        translate(width / 2, height / 2);
        textSize(15);
        for (var i = 0; i < n; i++) {
            let someAngle = radians(((360 / n) * i) - 90);
            let locX = length * cos(someAngle);
            let locY = length * sin(someAngle);
            textAlign(CENTER);
            let target = this.minute
            if (n == 12) {
                target = this.hour;
            }
            if (i == target) {
                fill(255, 255, 0);
            } else {
                fill(0, 0, 0, 100);
            }
            text(i, locX, locY);
        }
        pop();
    }
    increment() {
        this.second += 1;
        if (this.second >= 60) {
            this.second = 0;
            this.minute++;
        }
        if (this.minute >= 60) {
            this.minute = 0;
            this.hour++;
        }
        if (this.hour >= 12) {
            this.hour = 0;
        }
        this.updateAngles();
    }
    updateAngles() {
        let maxAngle = 180;
        this.hourAngle = (this.hour * maxAngle / 12) - 45;
        this.minAngle = (this.minute * maxAngle / 60) - 45;
        this.secAngle = (this.second * maxAngle / 60) - 45;
    }
    showHands(x, angle, col) {
        push();
        translate(width / 2, height / 2);
        rotate(angle);
        stroke(col);
        strokeWeight(4);
        let locX = x * cos(angle);
        let locY = x * sin(angle);
        line(0, 0, locX, locY);
        ellipse(locX, locY, 10, 10);
        pop();
    }
    displayClock() {
        this.showNumbers(12, 120);
        this.showNumbers(60, 240);
        this.showHands(this.hourDisp, radians(this.hourAngle), color(255, 255, 0));
        this.showHands(this.minDisp, radians(this.minAngle), color(0, 255, 255));
        this.showHands(this.secDisp, radians(this.secAngle), color(255, 0, 255));
    }
    displayDigitalClock() {
        stroke(255);
        fill(255);
        let time = this.hour + " : " + this.minute + " : " + this.second;
        textSize(32);
        textAlign(CENTER);
        text(time, width / 2, height);
    }
}