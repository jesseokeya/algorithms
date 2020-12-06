/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = {}
    
    const possiblePaths = (m, n) => {
        const key = `${m},${n}`
        if (memo.hasOwnProperty(key)) return memo[key]
        if (m === 1 && n === 1) return 1
        if (m === 0 || n === 0) return 0
        memo[key] = possiblePaths(m - 1, n) + possiblePaths(m, n - 1)
        return memo[key] 
    }
    
    return possiblePaths(m, n)
};
