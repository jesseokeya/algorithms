/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) i--
    
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[j] <= nums[i]) j--
        swap(nums, i, j)
    }
    
    reverse(nums, i + 1)
};

const swap = (nums, i, j) => {
    const temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp
}

const reverse = (nums, start = 0) => {
    let end = nums.length - 1
    while (start < end) {
        swap(nums, start, end)
        start++
        end--
    }
}