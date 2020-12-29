/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b)
    
    const visited = new Array(nums.length).fill(false), results = []
    
    const dfs = (prefix, visited) => {
        if (nums.length === prefix.length) return results.push(prefix)
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue
            visited[i] = true
            dfs(prefix.concat(nums[i]), visited)
            visited[i] = false
        }
    }
    
    
    dfs([], visited)
    
    return results
};
