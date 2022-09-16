/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let windowStart = 0, windowSum = 0, result = Infinity
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]
        
        while (windowSum >= target) {
            const windowSize = (windowEnd - windowStart) + 1
            result = Math.min(result, windowSize)
            windowSum -= nums[windowStart]
            windowStart++
        }
    }
    
    if (result === Infinity) return 0
    
    return result
};