class Snake {
    constructor(pos, len) {
        this.pos = pos; // head position
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);

        this.tail = [];
        this.length = 10;
        this.life = 0;

        this.maxSpeed = 2;
        this.maxForce = 100;

        this.tail.push(new Segment(pos.copy(), 0, this.length, len / 3)); // head
        for (let i = 0; i < len; i++) {
            let temp = new Segment(this.tail[i].end.copy(), 0, this.length, (len - i) / 3);
            this.tail.push(temp);
        }
    }
    move(desired) {
        this.life += 0.1;
        this.tail[0].follow(desired);
        this.tail[0].show(floor(this.life), 255, floor(this.life));
        for (let i = 1; i < this.tail.length; i++) {
            this.tail[i].follow(this.tail[i - 1].start.copy());
            this.tail[i].show();
            this.tail[i].track_collision(this.tail[0]);
        }
    }
    steer(x, y) {
        let desired = createVector(x, y);
        let opposite = this.velocity.copy();
        if (this.normalize_vector(desired) !== this.normalize_vector(opposite).sub(-1)) {
            desired.normalize();
            desired.mult(this.maxSpeed);
            let steer = p5.Vector.sub(desired, this.velocity);
            steer.limit(this.maxForce);
            this.apply_force(steer);

            this.velocity.add(this.acceleration);
            this.velocity.limit(this.maxSpeed);
            this.move(p5.Vector.add(this.tail[0].end, this.velocity));
            this.acceleration.mult(0);
        }
    }
    apply_force(force) {
        this.acceleration.add(force);
    }
    normalize_vector(vector) {
        let temp = vector.copy();
        if (temp.x > 0) {
            temp.x = temp.x / temp.x;
        } else {
            temp.x = temp.x / (temp.x * (-1));
        }

        if (temp.y > 0) {
            temp.y = temp.y / temp.y;
        } else {
            temp.y = temp.y / (temp.y * (-1));
        }

        return temp;
    }
}