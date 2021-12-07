/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0, j = nums.length - 1
    while (i <= j) {
        const mid = Math.floor((i + j) / 2), value = nums[mid]
        if (value > target) j = mid - 1
        else if (value < target) i = mid + 1
        else return mid
    }
    return -1
};