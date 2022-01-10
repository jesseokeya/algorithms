/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let runningProduct = 1
    const result = []
    for (let i = 0; i < nums.length; i++) {
        result[i] = runningProduct
        runningProduct *= nums[i]
    }
    runningProduct = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= runningProduct
        runningProduct *= nums[i]
    }
    
    return result
};