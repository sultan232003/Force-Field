const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const text = document.getElementById("text")

let mouseX
let mouseY
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})

let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight
let centerX = width / 2
let centerY = height / 2

let force = new forceField(centerX, centerY, 200, 50)
let force1 = new forceField(300, 30, 100, 25)

function update() {
    ctx.clearRect(0, 0, width, height);

    force.forcefield_calc()
    force.forcefield_show()
    force1.forcefield_calc()
    force1.forcefield_show()

    requestAnimationFrame(update);
}

update()

function checkEdges(p) {
    if (p.position.getY() + p.radius > height) {
        p.position.setY(height - p.radius);
        p.velocity.setY(p.velocity.getY() * -0.95);
    }
}