function Snake() {
    this.pos;
    this.dir;
    this.tail = [];
    this.radius = 20;

    this.Setup = function(pos, dir, length) {
        this.pos = pos; // head position
        this.dir = dir;
        for (var i = 0; i < length; i++) {
            var temp = pos.x + dir.x * i * this.radius;
            this.tail.push(createVector(temp, 0));
        }
    }
    this.Move = function() {
        for (var i = 0; i < this.tail.length; i++) {
            this.tail[i].add(this.dir);
            ellipse(this.tail[i].x, this.tail[i].y, this.radius, this.radius);
        }
    }
    this.Steer = function(x, y) {
        if (this.dir.x != 0 && this.dir.x == -x)
            return;
        if (this.dir.y != 0 && this.dir.y == -y)
            return;

        this.dir.x = x;
        this.dir.y = y;
    }
    this.Update = function() {
        this.Move();
    }
}