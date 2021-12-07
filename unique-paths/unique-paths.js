/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dfs = (m, n, memo) => {
        const key = `${m},${n}`
        if (memo.has(key)) return memo.get(key)
        if (m === 0 && n === 0) return 1
        if (m < 0 || n < 0) return 0
        memo.set(key, dfs(m - 1, n, memo) + dfs(m, n - 1, memo))
        return memo.get(key)
    }
    
    return dfs(m - 1, n - 1, new Map())
};