/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let windowStart = 0, result = 0, occurrences = 0
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] === 1) occurrences++
        
        const windowSize = (windowEnd - windowStart)  + 1
        if ((windowSize - occurrences) > k) {
            if (nums[windowStart] === 1) occurrences--
            windowStart++
        }
        
        result = Math.max(result, (windowEnd - windowStart)  + 1)
    }
    
    return result
};