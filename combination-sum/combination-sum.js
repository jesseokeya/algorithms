/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const combination = (prefix, start, sum) => {
        if (sum === target) return result.push(prefix)
        for (let i = start; i < candidates.length; i++) {
            const candidate = candidates[i], total = sum + candidate
            if (sum <= target) combination(prefix.concat(candidate), i, total)
        }
    }
    combination([], 0, 0)
    return result
};
