/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const cache = {}
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) cache[j + 1] = [nums[i], nums[j]]
        }
    }
    for (const key in cache) {
        const value = cache[key]
        for (let i = key; i < nums.length; i++) {
            if (value[0] < value[1] && value[1] < nums[i]) return true
        }
    }
    
    return false
};
