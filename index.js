const matrix = require('./matrix.js');

const test = matrix.matrix4.identity();
const test2 = matrix.matrix4.identity();
const test3 = matrix.matrix4.mult( test, test2 );
console.log( matrix.matrix4.sprint( test3 ) );