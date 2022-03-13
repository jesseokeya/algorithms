/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const numbers = new Set(nums)
    for(let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
        if (!numbers.has(i)) return i
    }
};