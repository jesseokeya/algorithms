/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    nums = Array.from(new Set(nums))
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i !== j) result = Math.max(result, nums[i] ^ nums[j])
        }
    }
    return result
};