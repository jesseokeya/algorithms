/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowStart = 0, windowSum = 0, result = -Infinity
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]
        
        if (windowEnd >= k - 1) {
            const windowSize = (windowEnd - windowStart) + 1
            result = Math.max(result, windowSum / windowSize)
            windowSum -= nums[windowStart]
            windowStart++
        }
    }
    
    return result
};
