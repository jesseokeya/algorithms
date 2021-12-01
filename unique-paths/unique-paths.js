/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const possiblePaths = (m, n, memo) => {
        const key = `${m},${n}`
        if (memo.has(key)) return memo.get(key)
        if (m === 1 && n === 1) return 1
        if (m === 0 || n === 0) return 0
        const result = possiblePaths(m - 1, n, memo) + possiblePaths(m, n - 1, memo)
        memo.set(key, result)
        return result
    }
    
    return possiblePaths(m, n, new Map())

};