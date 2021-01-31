/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    const values = new Array(n).fill('a')
    k -= n
    
    let i = n - 1
    
    while (k > 0) {
        values[i--] = String.fromCharCode(97 + Math.min(25, k))
        k -= 25
    }
    
    return values.join('')
};