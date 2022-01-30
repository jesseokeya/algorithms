/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    k %= nums.length
    
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};

const swap = (nums, i, j) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

const reverse = (nums, left, right) => {
    while (left < right) {
        swap(nums, left, right)
        left++
        right--
    }
}