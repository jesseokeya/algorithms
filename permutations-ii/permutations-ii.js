/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = []
    const visited = new Array(nums.length).fill(false)
    nums.sort((a, b) => a - b);
    
    const dfs = (nums, prefix, visited) => {
        if (nums.length === prefix.length) return results.push(prefix)
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || i > 0 && nums[i] === nums[i-1] && !visited[i-1]){
                continue;
            }
            visited[i] = true
            dfs(nums, prefix.concat(nums[i]), visited)
            visited[i] = false
        }
    }
    
    dfs(nums, [], visited)
    return results
};
