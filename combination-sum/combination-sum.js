/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    
    const dfs = (prefix, idx, sum) => {
        if (target === sum) result.push(prefix)
        for (let i = idx; i < candidates.length; i++) {
            const n = candidates[i]
            if (n + sum > target) continue
            dfs(prefix.concat(n), i, sum + n)
        }
    }
    
    dfs([], 0, 0)
    
    return result
};