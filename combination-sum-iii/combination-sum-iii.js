/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let results = [], seen = new Set()
    const dfs = (prefix, sum) => {
        if (prefix.length === k && sum === n) { 
            const sorted = prefix.sort((a, b) => a - b).join()
            if (seen.has(sorted)) return results
            seen.add(sorted)
            return results.push(prefix)
        }
        for (let i = 0; i < 9; i++) {
            const value = i + 1, acc = value + sum
            if (acc > n || prefix.length > k) continue
            if (!seen.has(value)) {
                seen.add(value)
                dfs(prefix.concat(value), acc)
                seen.delete(value)
            }
        }
    }
    dfs([], 0)
    return results
};
