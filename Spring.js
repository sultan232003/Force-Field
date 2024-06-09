class spring1 {
    constructor(x, y, radius, friction, separation, k_value, spring_to_x, spring_to_y, spring_to_radius) {
        this.x = x
        this.y = y
        this.friction = friction || 0.9;
        this.this_point = particle.create(this.x, this.y, 0, 0, 0)
        this.radius = radius || 10;
        this.spring_to_radius = spring_to_radius || 10;
        this.this_point.friction = this.friction
        this.separation = separation
        this.spring_to_x = spring_to_x
        this.spring_to_y = spring_to_y
        this.spring_to = particle.create(this.spring_to_x, this.spring_to_y, 0, 0, 0)
        this.spring_to.friction = 0.9
        this.k_value = k_value
    }

    operate() {
        this.gap = utils.distanceXY(this.x, this.y, mouseX, mouseY)
        if (this.gap <= this.radius) {
            this.this_point.position._x = mouseX
            this.this_point.position._y = mouseY
        }
        utils.spring(this.this_point, this.spring_to, this.separation, this.k_value)
        utils.spring(this.spring_to, this.this_point, this.separation, this.k_value)
    }
    update() {
        this.this_point.update()
        this.x = this.this_point.position._x
        this.y = this.this_point.position._y
    }

    show() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.arc(this.spring_to_x, this.spring_to_y, this.spring_to_radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.spring_to.position._x, this.spring_to.position._y);
        ctx.stroke();
    }
}

class forceField {
    constructor(x, y, force_radius, numObjects) {
        this.force_radius = force_radius
        this.x = x
        this.y = y
        this.numObjects = numObjects
        this.slice = Math.PI * 2 / this.numObjects
        this.test_array = []
    }

    forcefield_calc() {
        for (var i = 0; i < this.numObjects; i += 1) {
            let angle = 0
            angle = i * this.slice;
            let force_x
            let force_y
            force_x = this.x + Math.cos(angle) * this.force_radius;
            force_y = this.y + Math.sin(angle) * this.force_radius;
            this.test_array.push(new spring1(force_x, force_y, 20, 0.9, 0, 0.03, force_x, force_y, 10))
        }
    }

    forcefield_show() {
        for (let i = 0; i < this.numObjects; i++) {
            this.test_array[i].operate()
            this.test_array[i].update()
            // test_array[i].show()
        }
        for (let i = 0; i < this.numObjects; i++) {
            utils.spring(this.test_array[i].this_point, this.test_array[(i + 1) % this.numObjects].this_point, 20, this.k_value)
            ctx.beginPath();
            ctx.moveTo(this.test_array[i].x, this.test_array[i].y);
            ctx.lineTo(this.test_array[(i + 1) % this.numObjects].x, this.test_array[(i + 1) % this.numObjects].y,);
            ctx.stroke();
        }
    }
}