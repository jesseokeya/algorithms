/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = [], seen = new Set()
    const combine = (prefix, runningSum, idx) => {
        if (runningSum === target) return results.push(prefix)
        for (let i = idx; i < candidates.length; i++) {
            const candidate = candidates[i], sum = runningSum + candidate
            if (sum > target) continue
            combine(prefix.concat(candidate), sum, i)
        }
    }
    combine([], 0, 0)
    return results
}; 