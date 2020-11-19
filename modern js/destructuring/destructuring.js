// const PI = Math.PI 
// const E = Math.E;
// const SQRT2 = Math.SQRT2; 

const {PI, E, SQRT2 } = Math;

// with require 
// const { readFile } = require('fs'); 

const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea =({ radius}, {prescision = 2 } = {}) =>
    (PI * radius * radius).toFixed(prescision);

console.log(
    circleArea(circle)
);

console.log(
    circleArea(circle, {prescision: 5})
);

const [first, second,, forth] = [10,20,30,40];