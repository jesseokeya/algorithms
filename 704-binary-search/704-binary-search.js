/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const value = nums[mid]
        if (value > target) right = mid - 1
        else if (value < target) left = mid + 1
        else return mid
    }
    return -1
};