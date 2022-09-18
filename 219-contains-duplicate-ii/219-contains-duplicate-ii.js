/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const mappings = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (mappings.has(num) && i - mappings.get(num) <= k) return true
        mappings.set(num, i)
    }
    
    return false
};