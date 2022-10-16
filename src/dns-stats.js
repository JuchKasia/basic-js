const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dns = {}
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.').reverse()
    // console.log(domain);
    for (let j = 0 ; j < domain.length; j++) {
      domain[j] = `.${domain[j]}`;
      if (domain[j - 1]) {
        domain[j] = `${domain[j - 1]}${domain[j]}`
      }
    }


    for (let j = 0 ; j < domain.length; j++) {
      if (!dns[domain[j]]) {
        dns[domain[j]] = 1;
      } else {
        dns[domain[j]]++;
      }
    }
  }



  return dns;
}

module.exports = {
  getDNSStats
};
