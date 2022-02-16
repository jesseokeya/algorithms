/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0], minSoFar = nums[0], result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const value = nums[i]
        maxSoFar *= value
        minSoFar *= value
        if (nums[i] < 0) {
            // swap min and max so far
            const temp = maxSoFar
            maxSoFar = minSoFar
            minSoFar = temp
        }
        
        maxSoFar = Math.max(value, maxSoFar)
        minSoFar = Math.min(value, minSoFar)
        result = Math.max(result, maxSoFar)
    }
    return result
};