class Segment {
    constructor(pos, angle, len, str) {
        this.start = pos;
        this.angle = angle;
        this.length = len;
        this.stroke = str;
        // calculating end
        let dx = this.length * cos(this.angle);
        let dy = this.length * sin(this.angle);
        this.end = createVector(this.start.x + dx, this.start.y + dy);
    }

    follow(target) {
        let direction = p5.Vector.sub(target, this.start);
        this.angle = direction.heading();

        let dx = this.length * cos(this.angle);
        let dy = this.length * sin(this.angle);
        this.start.set(target.x - dx, target.y - dy);
        this.end.set(target.x, target.y);
    }

    track_collision(head) {
        let x = (this.start.x + this.end.x) / 2;
        let y = (this.start.y + this.end.y) / 2;
        let distance = sqrt(pow(head.end.x - x, 2) + pow(head.end.y - y, 2));

        if (distance < this.length / 2 + 1) {
            // print('kolizja (ogon)');
        }
        if (head.end.x < 0 || head.end.x > width) {
            // print('kolizja (sciana)');
        }
        if (head.end.y < 0 || head.end.y > height) {
            // print('kolizja (sciana)');
        }
    }

    show(r, g, b) {
        stroke(r, g, b);
        strokeWeight(this.stroke);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}