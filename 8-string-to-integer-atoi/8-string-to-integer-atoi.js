/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const match = str.trim().match(/([\+\-0]*\d+)\D*/)
    if (!match) return 0
    const value = Number(match[1])
    const index = match['index']
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1
    if (value && index === 0) {
        if (value < min) {
            return min 
        } else if (value > max) {
            return max
        }
        return value
    }
    return 0
};