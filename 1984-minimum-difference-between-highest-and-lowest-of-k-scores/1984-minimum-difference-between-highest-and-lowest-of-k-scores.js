/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let windowStart = 0, result = Infinity
    nums = nums.sort((a, b) => a - b)
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const right = nums[windowEnd]
        if (windowEnd >= k - 1) {
            const left = nums[windowStart]
            // since its sorted the first is the smallest and last 
            // is the biggest
            result = Math.min(right - left, result)
            windowStart++
        }
    }
    
    if (result === Infinity) return 0
    
    return result
};