/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0) return Math.abs(nums[i])
        nums[index] = -nums[index]
    }
    return -1
};