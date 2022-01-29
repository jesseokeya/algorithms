/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = -Infinity
    for (let i = 0; i < nums.length; i++) {
        let counter = 0
        if (nums[i] === 1) counter = 1
        while (nums[i] === 1 && nums[i] === nums[i + 1]) {
            counter++
            i++
        }
        result = Math.max(result, counter)
    }
    return result
};