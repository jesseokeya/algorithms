/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2, 31)
    if (x > max || x < -max) return 0
    let remainder = 0, result = 0
    while (x) {
        remainder = x % 10
        result = (result * 10) + remainder
        x = x / 10 | 0
        if (result > max || result < -max) return 0
    }
    return result
};