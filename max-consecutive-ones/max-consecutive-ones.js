/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (nums.length <= 2 && nums.includes(0)) return Math.max(...nums)
    let result = 1
    for (let i = 0; i < nums.length - 1; i++) {
        let count = 0
        let curr = nums[i], next = nums[i + 1]
        while (curr === 1 && curr == next) {
            count++
            next = nums[i + count]
        }
        i += count
        result = Math.max(count, result)
    }
    return result
};