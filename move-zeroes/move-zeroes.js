/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i]
        if (num === 0) {
            nums.push(nums.splice(i, 1))
        }
    }
    return nums
};
