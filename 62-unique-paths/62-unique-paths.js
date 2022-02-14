/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, seen = new Map()) {
    const key = `${m}#${n}`
    if (seen.has(key)) return seen.get(key)
    if (m === 1 && n === 1) return 1
    if (m < 1 || n < 1) return 0
    const paths = uniquePaths(n - 1, m, seen) + uniquePaths(n, m - 1, seen)
    seen.set(key, paths)
    return paths
};