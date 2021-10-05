/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = new Map()) {
    if (memo.has(n)) return memo.get(n)
    
    if (n === 0) return 1
    if (n < 0) return 0
    
    const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    memo.set(n, result)
    
    return result
};