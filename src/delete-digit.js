const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr  = String(n).split('').map(Number)
    return Math.max(...arr.map((el,i)=>{
       let  copyArr = arr.slice(); 
       copyArr.splice(i,1); 
       return Number( copyArr.join(''))}))
}

console.log(deleteDigit(152));


module.exports = {
  deleteDigit
};
