const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code 
  let indices = [];
  let element = -1;
  let idx = arr.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(element, idx + 1);
  }
  arr = arr.filter(el => el !== -1);
  console.log(arr);
  arr.sort((a,b) => {return a - b;});
  console.log(indices);
  indices.forEach(index => arr.splice(index, 0, -1));
  console.log(arr);
  return arr;

}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = {
  sortByHeight
};
