class Ball {
    constructor(x, y, r) {
        // body...
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.radius = r;
        this.rebounding = false;
        this.resting = true;
        this.coloringRed = 255;
        this.coloringGreen = 255;
        this.coloringBlue = 0;
        this.positiveDirection = true;
        this.negativeDirection = false;
    }
    move() {
        if (this.resting) {
            print("done");
            this.coloringRed = 0;
            this.coloringGreen = 255;
            this.coloringBlue = 0;
            noLoop();
        } else if (this.rebounding) {
            this.applyReboundForce();
        } else {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.handleEdges();
        }
    }
    applyReboundForce() {
        this.velocity.mult(-1);
        this.coloringBlue = 255;
        this.coloringGreen = 0;
        this.rebounding = false;
    }
    applyForce(force) {
        this.acceleration.add(force);
        this.resting = false;
    }
    display() {
        stroke(this.coloringRed, this.coloringGreen, this.coloringBlue);
        fill(this.coloringRed, this.coloringGreen, this.coloringBlue);
        ellipse(this.position.x, this.position.y, this.radius);
    }
    logData() {
        print("position is " + this.position);
        print("velocity is " + this.velocity);
        print("acceleration is " + this.acceleration);
    }
    handleEdges() {
        if (this.position.y > height) {
            this.decideMovement(this.velocity.y, this.positiveDirection);
        }
        if (this.position.y < 0) {
            this.decideMovement(this.velocity.y, this.negativeDirection);
        }
        if (this.position.x > width) {
            this.decideMovement(this.velocity.x, this.positiveDirection);
        }
        if (this.position.x < 0) {
            this.decideMovement(this.velocity.x, this.negativeDirection);
        }
    }
    decideMovement(aVelocity, directionPositive) {
        let ballStopped = false;
        if (directionPositive) {
            ballStopped = aVelocity <= 0;
        } else {
            ballStopped = aVelocity > 0;
        }
        if (ballStopped) {
            this.logData();
            this.acceleration.mult(0);
            this.velocity.mult(0);
            this.resting = true;
            this.rebounding = false;
        } else {
            this.rebounding = true;
        }
    }
}