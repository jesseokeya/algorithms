/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const max = nums.length, set = new Set(nums)
    const result = []
    
    for (let i = 1; i <= max; i++) {
        if (!set.has(i)) result.push(i)
    }
    
    return result
};