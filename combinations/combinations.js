/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [], cache = new Set()
    const dfs = (prefix, start) => {
        if (prefix.length === k) return result.push(prefix)
        for (let i = start; i < n; i++) {
            const value = i+1
            if (!cache.has(value)) { 
                cache.add(value)
                dfs(prefix.concat(value), i)
                cache.delete(value) 
            }
        }
    }
    dfs([], 0)
    return result
};