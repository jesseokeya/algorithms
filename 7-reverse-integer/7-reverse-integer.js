/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = Math.pow(2, 31)
    if (x > limit || x < -limit) return 0
    let remainder = 0, result = 0
    while (x) {
        remainder = x % 10
        result = (result * 10) + remainder
        x = x / 10 | 0
        if (result > limit || result < -limit) return 0
    }
    return result
};