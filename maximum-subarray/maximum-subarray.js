/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], currentSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const value = nums[i]
        currentSum = Math.max(currentSum + value, value)
        max = Math.max(currentSum, max)
    }
    return max
};
