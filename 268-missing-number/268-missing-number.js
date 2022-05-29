/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const values = new Set(nums)
    for (let i = 0; i < nums.length; i++) {
        if (!values.has(i)) return i
    }
    return nums.length
};