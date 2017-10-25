class Segment {
    constructor(pos, angle, len) {
        this.start = pos;
        this.angle = angle;
        this.length = len;
        this.end = createVector();
        this.calculate_end();
    }

    calculate_end() {
        let dx = this.length * cos(this.angle);
        let dy = this.length * sin(this.angle);
        this.end.set(this.start.x + dx, this.start.y + dy);
    }

    follow(x, y) {
        let target = createVector(x, y);
        let direction = p5.Vector.sub(target, this.start);
        this.angle = direction.heading();

        let dx = this.length * cos(this.angle);
        let dy = this.length * sin(this.angle);
        this.start.set(target.x - dx, target.y - dy);

        // direction.setMag(this.length);
        // this.start.set(target.x - direction.x, target.y - direction.y);
        this.update();
    }

    update() {
        this.calculate_end();
    }

    show() {
        fill(255);
        stroke(255);
        strokeWeight(2);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
        // ellipse((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2, this.length);
    }
}