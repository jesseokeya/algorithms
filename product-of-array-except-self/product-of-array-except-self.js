/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [], runningSum = 1
    for (let i = 0; i < nums.length; i++) {
        result[i] = runningSum
        runningSum *= nums[i]
    }
    runningSum = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= runningSum
        runningSum *= nums[i]
    }
    
    return result
};   