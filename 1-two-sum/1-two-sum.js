/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hmap = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i], diff = target - num
        if (hmap.has(diff)) return [hmap.get(diff), i]
        hmap.set(num, i)
    }
    
    return []
};