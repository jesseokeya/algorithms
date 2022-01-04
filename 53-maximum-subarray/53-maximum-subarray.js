/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let runningMax = nums[0], max = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        runningMax = Math.max(nums[i], nums[i] + runningMax)
        max = Math.max(max, runningMax)
    }
    
    return max
};