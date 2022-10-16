const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 1;

    for (let element of arr) {
      let arrDepth = 1;
      if (Array.isArray(element)) {
        arrDepth += this.calculateDepth(element);
        if (arrDepth > count) {
          count = arrDepth;
        } else count = count;
      }

    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
