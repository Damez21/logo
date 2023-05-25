const Square = require("../library/shapes")
const Circle = require("../library/shapes")
const Triangle = require("../library/shapes")


function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'Square') {
        shape = new Square(data.shape-color, data.text, data.text-color)
    } else if (data.shape === 'Circle') {
        shape = new Circle(data.shape-color, data.text, data.text-color)
    } else {
        shape = new Triangle(data.shape-color, data.text, data.text-color)
    }
    return shape.render();
}

module.exports = generateLogo;