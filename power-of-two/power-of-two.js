/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let pow = 1, prev
    while (pow <= n) {
        prev = pow
        pow *= 2
    }
    return prev === n
};