/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length === 1) return nums[0]
    let max = -Infinity
    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0
        for (let j = 0; j < k; j++) {
            sum += nums[i + j]
        }
        max = Math.max(max, sum/k)
    }
    return max
};