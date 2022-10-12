/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let windowStart = 0, result = 0, runningProduct = 1
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const right = nums[windowEnd]
        runningProduct *= right
        
        while (runningProduct >= k && windowStart <= windowEnd) {
            const left = nums[windowStart]
            runningProduct /= left
            windowStart++
        }
        
        result += (windowEnd - windowStart) + 1
    }
    
    return result
};