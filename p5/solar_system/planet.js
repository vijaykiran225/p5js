class Planet {
    constructor(distance, r, parent) {
        this.distance = distance;
        this.y = 0;
        this.x = 0;
        this.angle = random(0, 360);
        this.radius = r;
        this.parent = parent;
        this.omega = 1 / this.distance;
    }
    orbit() {
        this.x = this.distance * cos(this.angle);
        this.y = this.distance * sin(this.angle);
        this.angle += this.omega;
    }
    show() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, this.radius * 2);
        point(this.x, this.y);
    }
}