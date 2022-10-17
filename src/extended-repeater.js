const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options) {
  str += '';

  let result = '';
  const separator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  const addition = options.hasOwnProperty('addition') ? options.addition : '';

  result += str + addition;
  result += addAddition(addition, options.additionRepeatTimes, additionSeparator);

  for (let i = 1; i < options.repeatTimes; i++) {
    result += separator;
    result += str + addition;

    result += addAddition(addition, options.additionRepeatTimes, additionSeparator);
  }

  return result;
}

function addAddition(addition, times, separator) {
  let result = '';

  for (let i = 1; i < times; i++) {
    result += separator;
    result += addition;
  }

  return result;
}

module.exports = {
  repeater
};