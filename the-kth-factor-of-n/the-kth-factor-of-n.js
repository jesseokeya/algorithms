/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let counter = 0
    for (let i = 0; i <= n; i++) {
       if (n % i === 0) {
           counter++
           if (counter === k) return i
       }
    }
    return -1
};
