function Particle(x, y, target) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.target = createVector(target.x, target.y);
    this.radius = 5;
    this.maxSpeed = 0.0015;
    this.maxForce = 0.22;
    this.displayColor = color(255);
    this.update = function() {
        // body...
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.mult(0);
    }
    this.display = function() {
        // body...
        fill(this.displayColor);
        stroke(this.displayColor);
        strokeWeight(4);
        point(this.position.x, this.position.y);
    }
    this.act = function() {
        // body...
        let mouse = createVector(mouseX, mouseY);
        if (p5.Vector.dist(mouse, this.position) < 50) {
            let fleeForce = this.flee(mouse);
            fleeForce.mult(1.5);
            this.applyForce(fleeForce);
        }
        let steerForce = this.seek(this.target);
        steerForce.mult(2);
        this.applyForce(steerForce);
    }
    this.flee = function(target) {
        // body...
        let desired = p5.Vector.sub(target, this.position);
        desired.mult(-1);
        let steeringForce = p5.Vector.sub(desired, this.velocity);
        steeringForce.mult(this.maxForce);
        return steeringForce;
    }
    this.seek = function(target) {
        // body...
        let desired = p5.Vector.sub(target, this.position);
        let applicableSpeed = this.maxSpeed;
        let d = desired.mag();
        if (d < this.radius) {
            applicableSpeed = map(d, 0, this.radius, 0, this.maxSpeed);
        }
        desired.mult(applicableSpeed);
        let steeringForce = p5.Vector.sub(desired, this.velocity);
        steeringForce.mult(this.maxForce);
        return steeringForce;
    }
    this.boundaryCheck = function() {
        // body...
    }
    this.applyForce = function(force) {
        // body...
        this.acceleration.add(force);
    }
}