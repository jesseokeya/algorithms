/**
 * @param {number[]} nums
 * @return {number}
    nums = [4,2,4,5,6], max = 17
                  ^
    { 4: 1, 2: 1, 5: 1, 6: 1 }
 */
var maximumUniqueSubarray = function(nums) {
    let windowStart = 0, result = -Infinity, mappings = new Map()
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const right = nums[windowEnd]
        
        if (mappings.has(right)) {
            windowStart = Math.max(windowStart, mappings.get(right) + 1)
        }
        
        mappings.set(right, windowEnd)
        const sublist = nums.slice(windowStart, windowEnd + 1)
        const sublistSum = sublist.reduce((acc, val) => acc + val, 0)
        result = Math.max(result, sublistSum)
    }
    
    if (result === -Infinity) return 0
    
    return result
};