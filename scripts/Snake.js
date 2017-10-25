class Snake {
    constructor(pos, dir, len) {
        this.pos = pos; // head position
        this.dir = dir;
        this.tail = [];
        this.length = 10;

        this.tail.push(new Segment(createVector(pos.x, pos.y), 0, this.length)); // head
        for (let i = 0; i < len; i++) {
            let temp = new Segment(this.tail[i].end.copy(), 0, this.length);
            this.tail.push(temp);
        }
    }
    move() {
        this.tail[0].follow(mouseX, mouseY);
        this.tail[0].show();
        for (let i = 1; i < this.tail.length; i++) {
            this.tail[i].follow(this.tail[i - 1].start.x, this.tail[i - 1].start.y);
            this.tail[i].show();
        }
    }
    steer(x, y) {
        if (this.dir.x != 0 && this.dir.x == -x)
            return;
        if (this.dir.y != 0 && this.dir.y == -y)
            return;

        this.dir.x = x;
        this.dir.y = y;
    }
}