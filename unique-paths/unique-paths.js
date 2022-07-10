/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = new Map()) {
    const key = `${m}#${n}`
    if (memo.has(key)) return memo.get(key)
    
    if (m === 1 && n === 1) return 1
    if (m < 0 || n < 0) return 0
    
    memo.set(key, uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo))
    return memo.get(key) 
};