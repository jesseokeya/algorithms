/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const paths = (i, j, cache) => {
        const key = `${i},${j}`
        if (cache.has(key)) return cache.get(key)  
        if (i === 1 && j === 1) return 1
        if (i < 1 || j < 1) return 0
        cache.set(key, paths(i - 1, j, cache) + paths(i, j - 1, cache))
        return cache.get(key)
    }
    return paths(m, n, new Map())
};