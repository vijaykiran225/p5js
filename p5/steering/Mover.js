function Mover(x, y) {
    this.position = createVector(x, y);
    this.maxSpeed = 1;
    this.velocity = createVector(2, 0);
    this.acceleration = createVector(5, 0);
    this.updateValue = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }
    this.seek = function(desired) {
        desired.sub(this.position);
        // desired.normalize();
        // desired.mult(this.maxSpeed);
        desired.sub(this.velocity);
        desired.limit(this.maxSpeed);
        this.applyForce(desired);
        this.updateValue();
    }
    this.applyForce = function(force) {
        this.acceleration.add(force);
    }
    this.show = function() {
        stroke(255, 0, 0);
        ellipse(this.position.x, this.position.y, 10);
    }
}