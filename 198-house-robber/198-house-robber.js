/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dfs = (idx, memo) => {
        if (memo.has(idx)) return memo.get(idx)
        else if (idx >= nums.length) return 0
        const result = Math.max(dfs(idx + 1, memo), dfs(idx + 2, memo) + nums[idx])
        memo.set(idx, result)
        return result
    }
    
    return dfs(0, new Map())
};