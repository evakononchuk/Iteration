"use strict";

const max = (matrix) => {
  let arr2d = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let a = 0; a < row.length; a++) {
      const col = row[a];
      if (arr2d < col) arr2d = col;
    }
  }
  return arr2d;
};

module.exports = { max };
