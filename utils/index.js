const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo');

const questions = [
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your SVG to be?",
        choices: [
            "Square",
            "Circle",
            "Triangle"
        ]
    },

    {
        type: "input",
        name: "shape-color",
        message: "What color would you like your shape to be?"
    },

    {
        type: "input",
        name: "text",
        message: "Please type a set of 3 letters."
    },

    {
        type: "input",
        name: "text-color",
        message: "What color would you like your text to be?"
    }
];



