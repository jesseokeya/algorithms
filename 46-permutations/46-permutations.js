/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = []
    
    const permutation = (idx, prefix, seen) => {
        if (idx > nums.length) return
        if (prefix.length === nums.length) results.push(prefix)
        
        for (let i = 0; i < nums.length; i++) {
            if (!seen.has(i)) {
                seen.add(i)
                const value = nums[i]
                permutation(i + 1, prefix.concat(value), seen)
                seen.delete(i)
            }
        }
    }
    
    permutation(0, [], new Set())
    
    return results
};