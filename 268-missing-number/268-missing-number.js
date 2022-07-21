/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const unique = new Set(nums)
    
    for (let i = 0; i <= nums.length; i++) {
        if (!unique.has(i)) return i
    }
    
    return -1
};