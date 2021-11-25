/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], runningSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const val = nums[i]
        runningSum = Math.max(val, val + runningSum)
        max = Math.max(max, runningSum)
    }
    return max
};