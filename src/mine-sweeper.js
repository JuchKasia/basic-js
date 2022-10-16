const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numbers = [];

  for (let i = 0; i < matrix.length; i++) {
    numbers.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      let number = 0;
      if (i - 1 >= 0 && matrix[i - 1][j])
        number++;
      if (i + 1 < matrix.length && matrix[i + 1][j])
        number++;
      if (j - 1 >= 0 && matrix[i][j - 1])
        number++;
      if (j + 1 < matrix[i].length && matrix[i][j + 1])
        number++;

      if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1])
        number++;
      if (i - 1 >= 0 && j + 1 < matrix[i].length && matrix[i - 1][j + 1])
        number++;
      if (i + 1 < matrix.length && j - 1 >= 0 && matrix[i + 1][j - 1])
        number++;
      if (i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1])
        number++;

      numbers[i].push(number);
    }
  }

  return numbers;
}

module.exports = {
  minesweeper
};
