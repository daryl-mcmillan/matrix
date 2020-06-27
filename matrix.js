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

  function matrixIdentity( size ) {
    const result = new Array( size * size );
    for( var row=0; row<size; row++ ) {
      for( var col=0; col<size; col++ ) {
        const index = matrixIndex(size, row, col);
        if( row === col ) {
          result[index] = 1;
        } else {
          result[index] = 0;
        }
      }
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

  return {
    matrix4: {
      identity: () => matrixIdentity( 4 ),
      mult: (left, right) => matrixMult( 4, left, right ),
      sprint: matrix => sprint( 4, matrix )
    }
  };
}

if( module ) {
  module.exports = Matrix();
}