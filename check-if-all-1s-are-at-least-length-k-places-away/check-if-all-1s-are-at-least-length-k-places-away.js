/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let previousIdx = -1, result = true
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i]
        if (previousIdx === -1 && val === 1) { 
            previousIdx = i 
            continue
        }
        if (val === 1) {
            result = result && Math.abs(previousIdx - i) >= k + 1
            previousIdx = i 
        }
    }
    return result
};