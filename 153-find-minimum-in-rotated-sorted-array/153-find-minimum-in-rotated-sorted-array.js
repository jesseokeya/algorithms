/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1
    let result = Infinity
    while (left <= right) {
        if (nums[left] < nums[right]) {
            return Math.min(result, nums[left]) 
        }
        
        const mid = Math.floor((left + right) / 2)
        result = Math.min(result, nums[mid]) 
        if (nums[mid] >= nums[left]) left = mid + 1
        else right = mid - 1
    }
    return result
};