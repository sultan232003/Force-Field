const drawpolygon = (x_position, y_position, height, sides, fill, color) => {
    angle = 0
    angle_interval = pi * 2 / sides
    poly_val = []
    x = x_position + cos(angle) * (height / 2)
    y = y_position + sin(angle) * (height / 2)
    poly_val.push({ x_val: x, y_val: y })
    for (let i = 0; i < sides * 2; i++) {
        angle = (i + 1) * angle_interval
        x = x_position + cos(angle) * (height / 2)
        y = y_position + sin(angle) * (height / 2)
        poly_val.push({ x_val: x, y_val: y })
    }
    print(poly_val)
    if (fill == true) {
        for (let j = 0; j < sides * 2; j++) {

            ctx.beginPath()
            ctx.moveTo(poly_val[j].x_val, poly_val[j].y_val)
            ctx.lineTo(poly_val[j + 1].x_val, poly_val[j + 1].y_val)
            ctx.lineTo(poly_val[2].x_val, poly_val[2].y_val)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }
    } else {
        for (let i = 0; i < sides; i++) {
            ctx.moveTo(poly_val[i].x_val, poly_val[i].y_val)
            ctx.lineTo(poly_val[i + 1].x_val, poly_val[i + 1].y_val)
            ctx.stroke()
        }
    }
}


const drawpentagon = (x_position, y_position, height, fill, color) => {
    angle = 0
    angle_interval = pi * 2 / 5
    penta_val = []
    x = x_position + cos(angle) * (height / 2)
    y = y_position + sin(angle) * (height / 2)
    penta_val.push({ x_val: x, y_val: y })
    for (let i = 0; i < 5 * 2; i++) {
        angle = (i + 1) * angle_interval
        x = x_position + cos(angle) * (height / 2)
        y = y_position + sin(angle) * (height / 2)
        penta_val.push({ x_val: x, y_val: y })
    }
    if (fill == true) {
        for (let j = 0; j < 5; j++) {
            ctx.beginPath()
            ctx.moveTo(penta_val[j].x_val, penta_val[j].y_val)
            ctx.lineTo(penta_val[j + 1].x_val, penta_val[j + 1].y_val)
            ctx.lineTo(penta_val[2].x_val, penta_val[2].y_val)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }
    } else {
        for (let i = 0; i < 5 * 2; i++) {
            ctx.moveTo(penta_val[i].x_val, penta_val[i].y_val)
            ctx.lineTo(penta_val[i + 1].x_val, penta_val[i + 1].y_val)
            ctx.stroke()
        }
    }
}

const drawhexagon = (x_position, y_position, height, width, fill, color) => {
    angle = 0
    angle_interval = pi * 2 / 6
    hexa_val = []
    x = x_position + cos(angle) * (width / 2)
    y = y_position + sin(angle) * (height / 2)
    hexa_val.push({ x_val: x, y_val: y })
    for (let i = 0; i < 6 * 2; i++) {
        angle = (i + 1) * angle_interval
        x = x_position + cos(angle) * (width / 2)
        y = y_position + sin(angle) * (height / 2)
        hexa_val.push({ x_val: x, y_val: y })
    }
    if (fill == true) {
        for (let j = 0; j < 6 * 2; j++) {
            ctx.beginPath()
            ctx.moveTo(hexa_val[j].x_val, hexa_val[j].y_val)
            ctx.lineTo(hexa_val[j + 1].x_val, hexa_val[j + 1].y_val)
            ctx.lineTo(hexa_val[2].x_val, hexa_val[2].y_val)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }
    } else {
        for (let i = 0; i < 6; i++) {
            ctx.moveTo(hexa_val[i].x_val, hexa_val[i].y_val)
            ctx.lineTo(hexa_val[i + 1].x_val, hexa_val[i + 1].y_val)
            ctx.stroke()
        }
    }
}

const drawseptagon = (x_position, y_position, height, fill, color) => {
    angle = 0
    angle_interval = pi * 2 / 7
    septa_val = []
    x = x_position + cos(angle) * (height / 2)
    y = y_position + sin(angle) * (height / 2)
    septa_val.push({ x_val: x, y_val: y })
    for (let i = 0; i < 7 * 2; i++) {
        angle = (i + 1) * angle_interval
        x = x_position + cos(angle) * (height / 2)
        y = y_position + sin(angle) * (height / 2)
        septa_val.push({ x_val: x, y_val: y })
    }
    if (fill == true) {
        for (let j = 0; j < 7 * 2; j++) {
            ctx.beginPath()
            ctx.moveTo(septa_val[j].x_val, septa_val[j].y_val)
            ctx.lineTo(septa_val[j + 1].x_val, septa_val[j + 1].y_val)
            ctx.lineTo(septa_val[2].x_val, septa_val[2].y_val)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }
    } else {
        for (let i = 0; i < 7; i++) {
            ctx.moveTo(septa_val[i].x_val, septa_val[i].y_val)
            ctx.lineTo(septa_val[i + 1].x_val, septa_val[i + 1].y_val)
            ctx.stroke()
        }
    }
}

const drawoctagon = (x_position, y_position, height, width, fill, color) => {
    angle = 0
    angle_interval = pi * 2 / 8
    octa_val = []
    x = x_position + cos(angle) * (width / 2)
    y = y_position + sin(angle) * (height / 2)
    octa_val.push({ x_val: x, y_val: y })
    for (let i = 0; i < 8 * 2; i++) {
        angle = (i + 1) * angle_interval
        x = x_position + cos(angle) * (width / 2)
        y = y_position + sin(angle) * (height / 2)
        octa_val.push({ x_val: x, y_val: y })
    }
    if (fill == true) {
        for (let j = 0; j < 8 * 2; j++) {
            ctx.beginPath()
            ctx.moveTo(octa_val[j].x_val, octa_val[j].y_val)
            ctx.lineTo(octa_val[j + 1].x_val, octa_val[j + 1].y_val)
            ctx.lineTo(octa_val[2].x_val, octa_val[2].y_val)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }
    } else {
        for (let i = 0; i < 8; i++) {
            ctx.moveTo(octa_val[i].x_val, octa_val[i].y_val)
            ctx.lineTo(octa_val[i + 1].x_val, octa_val[i + 1].y_val)
            ctx.stroke()
        }
    }
}

const drawnonagon = (x_position, y_position, height, fill, color) => {
    angle = 0
    angle_interval = pi * 2 / 9
    nona_val = []
    x = x_position + cos(angle) * (height / 2)
    y = y_position + sin(angle) * (height / 2)
    nona_val.push({ x_val: x, y_val: y })
    for (let i = 0; i < 9 * 2; i++) {
        angle = (i + 1) * angle_interval
        x = x_position + cos(angle) * (height / 2)
        y = y_position + sin(angle) * (height / 2)
        nona_val.push({ x_val: x, y_val: y })
    }
    if (fill == true) {
        for (let j = 0; j < 9 * 2; j++) {
            ctx.beginPath()
            ctx.moveTo(nona_val[j].x_val, nona_val[j].y_val)
            ctx.lineTo(nona_val[j + 1].x_val, nona_val[j + 1].y_val)
            ctx.lineTo(nona_val[2].x_val, nona_val[2].y_val)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }
    } else {
        for (let i = 0; i < 9; i++) {
            ctx.moveTo(nona_val[i].x_val, nona_val[i].y_val)
            ctx.lineTo(nona_val[i + 1].x_val, nona_val[i + 1].y_val)
            ctx.stroke()
        }
    }
}

const drawdecagon = (x_position, y_position, height, width, fill, color) => {
    angle = 0
    angle_interval = pi * 2 / 10
    deca_val = []
    x = x_position + cos(angle) * (width / 2)
    y = y_position + sin(angle) * (height / 2)
    deca_val.push({ x_val: x, y_val: y })
    for (let i = 0; i < 10 * 2; i++) {
        angle = (i + 1) * angle_interval
        x = x_position + cos(angle) * (width / 2)
        y = y_position + sin(angle) * (height / 2)
        deca_val.push({ x_val: x, y_val: y })
    }
    if (fill == true) {
        for (let j = 0; j < 10 * 2; j++) {
            ctx.beginPath()
            ctx.moveTo(deca_val[j].x_val, deca_val[j].y_val)
            ctx.lineTo(deca_val[j + 1].x_val, deca_val[j + 1].y_val)
            ctx.lineTo(deca_val[2].x_val, deca_val[2].y_val)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }
    } else {
        for (let i = 0; i < 10; i++) {
            ctx.moveTo(deca_val[i].x_val, deca_val[i].y_val)
            ctx.lineTo(deca_val[i + 1].x_val, deca_val[i + 1].y_val)
            ctx.stroke()
        }
    }
}



const drawgear = (gear_center_x, gear_center_y, teeth_number, inner_radius, teeth_depth, axis, axis_radius) => {
    innercircle = []
    outtercircle = []
    angle = 0
    outter_radius = inner_radius + teeth_depth
    angle_interval = pi * 2 / (teeth_number * 2)
    x = gear_center_x + cos(angle) * inner_radius
    y = gear_center_y + sin(angle) * inner_radius
    innercircle.push({ x_val: x, y_val: y })
    x2 = gear_center_x + cos(angle) * outter_radius
    y2 = gear_center_y + sin(angle) * outter_radius
    outtercircle.push({ x2_val: x2, y2_val: y2 })
    circumference = 2 * pi * inner_radius
    for (let i = 0; i < teeth_number * 2; i++) {
        angle = (i + 1) * angle_interval
        x = gear_center_x + cos(angle) * inner_radius
        y = gear_center_y + sin(angle) * inner_radius
        innercircle.push({ x_val: x, y_val: y })
        x2 = gear_center_x + cos(angle) * outter_radius
        y2 = gear_center_y + sin(angle) * outter_radius
        outtercircle.push({ x2_val: x2, y2_val: y2 })
    }
    for (let i = 0; i < teeth_number; i++) {
        ctx.moveTo(innercircle[i * 2].x_val, innercircle[i * 2].y_val)
        ctx.lineTo(outtercircle[i * 2].x2_val, outtercircle[i * 2].y2_val)
        ctx.moveTo(outtercircle[i * 2].x2_val, outtercircle[i * 2].y2_val)
        ctx.lineTo(outtercircle[i * 2 + 1].x2_val, outtercircle[i * 2 + 1].y2_val)
        ctx.moveTo(innercircle[i * 2 + 1].x_val, innercircle[i * 2 + 1].y_val)
        ctx.lineTo(innercircle[i * 2 + 2].x_val, innercircle[i * 2 + 2].y_val)
        ctx.moveTo(innercircle[i * 2 + 1].x_val, innercircle[i * 2 + 1].y_val)
        ctx.lineTo(outtercircle[i * 2 + 1].x2_val, outtercircle[i * 2 + 1].y2_val)
        ctx.stroke()
    }
    if (axis_radius == undefined && axis == true) {
        axis_radius = 10
    }
    if (axis == true) {
        ctx.beginPath()
        ctx.arc(gear_center_x, gear_center_y, axis_radius, 0, 2 * pi, false)
        ctx.stroke()
    }
}

const randomColor = () => {
    let r = floor(Math.random() * 255)
    let g = floor(Math.random() * 255)
    let b = floor(Math.random() * 255)
    return "rgb(" + r + "," + g + "," + b + ")"
}

const drawTile = (x, y, tileWidth, color) => {
    tileHeight = tileWidth / 2
    ctx.save()
    ctx.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(tileWidth / 2, tileHeight / 2)
    ctx.lineTo(0, tileHeight)
    ctx.lineTo(-tileWidth / 2, tileHeight / 2)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.stroke()
    ctx.fill()
    ctx.restore()
}


const drawBlock = (x, y, z, tileWidth, top_color, left_color, right_color, stroke) => {
    tileHeight = tileWidth / 2
    if (top_color == undefined) {
        top_color = "#eeeeee"
    }
    if (left_color == undefined) {
        left_color = "#999999"
    }
    if (right_color == undefined) {
        right_color = "#cccccc"
    }
    ctx.save()
    ctx.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2)

    // TOP
    ctx.beginPath()
    ctx.moveTo(0, -z * tileHeight)
    ctx.lineTo(tileWidth / 2, tileHeight / 2 - z * tileHeight)
    ctx.lineTo(0, tileHeight - z * tileHeight)
    ctx.lineTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight)
    ctx.closePath()
    if (stroke == true) {
        ctx.stroke()
    }
    ctx.fillStyle = top_color
    ctx.fill()

    // LEFT
    ctx.beginPath()
    ctx.moveTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight)
    ctx.lineTo(0, tileHeight - z * tileHeight)
    ctx.lineTo(0, tileHeight)
    ctx.lineTo(-tileWidth / 2, tileHeight / 2)
    ctx.closePath()
    if (stroke == true) {
        ctx.stroke()
    }
    ctx.fillStyle = left_color
    ctx.fill()

    // RIGHT
    ctx.beginPath()
    ctx.moveTo(tileWidth / 2, tileHeight / 2 - z * tileHeight)
    ctx.lineTo(0, tileHeight - z * tileHeight)
    ctx.lineTo(0, tileHeight)
    ctx.lineTo(tileWidth / 2, tileHeight / 2)
    ctx.closePath()
    if (stroke == true) {
        ctx.stroke()
    }
    ctx.fillStyle = right_color
    ctx.fill()

    ctx.restore()
}


const drawBlockFloor = (X_axis_block_amount, Y_axis_block_amount, tileWidth, height, top_color, left_color, right_color ,stroke, wave, Wave_offset, wave_speed) => {
    for (let x = 0; x < X_axis_block_amount; x++) {
        for (let y = 0; y < Y_axis_block_amount; y++) {
            drawBlock(x, y, height, tileWidth, top_color, left_color, right_color, stroke)
        }
    }
    if (wave == true) {
        angle = 0
        setInterval(() => {
            ctx.clearRect(-canvas_width / 2, -canvas_height / 2, canvas_width, canvas_height)
            for (let x = 0; x < X_axis_block_amount; x++) {
                for (let y = 0; y < Y_axis_block_amount; y++) {
                    a = angle + Wave_offset * y
                    h = sin(a)
                    drawBlock(x, y, h + height + Wave_offset, tileWidth, top_color, left_color, right_color ,stroke)
                }
            }
            angle += wave_speed
        }, 100);
    }
}