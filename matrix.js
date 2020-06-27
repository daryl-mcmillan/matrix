'use strict';

function Matrix() {

  function matrixIndex( size, row, col ) {
    return col * size + row;
  }

  function emptyMatrix( size ) {
    const result = new Array( size * size );
    for( var i=0; i<size*size; i++ ) {
      result[i] = 0;
    }
    return result;
  }

  function matrixMult( size, left, right ) {
    const result = emptyMatrix( size );
    for( var row=0; row<size; row++ ) {
      for( var col=0; col<size; col++ ) {
        for( var i=0; i<size; i++ ) {
          result[matrixIndex(size, row, col)] += left[matrixIndex(size, row, i)] * right[matrixIndex(size, i, col)];
        }
      }
    }
    return result;
  }

  function sprint( size, matrix ) {
    var str = "";
    for( var row=0; row<size; row++ ) {
      for( var col=0; col<size; col++ ) {
        str += "\t";
        str += matrix[ matrixIndex(size, row, col) ];
      }
      str += "\n";
    }
    return str;
  }

  function translate( x, y, z ) {
    return [
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      x,y,z,1
    ];
  }

  return {
    mult_mat4_mat4: (left, right) => matrixMult(4, left, right),
    mat4: {
      identity: () => [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1
      ],
      translate: (x,y,z) => [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        x,y,z,1
      ],
      scale: (x,y,z) => [
        x,0,0,0,
        0,y,0,0,
        0,0,z,0,
        0,0,0,1
      ],
      sprint: matrix => sprint( 4, matrix )
    }
  };
}

if( module ) {
  module.exports = Matrix();
}