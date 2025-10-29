/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num  = x.toString()
    let result = Number(num.split('').reverse().join(''))
    return x === result
};
