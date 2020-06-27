const matrix = require('./matrix.js');

const test = matrix.mat4.identity();
const test2 = matrix.mat4.identity();
const test3 = matrix.mult_mat4_mat4( test, test2 );
console.log( matrix.mat4.sprint( test3 ) );