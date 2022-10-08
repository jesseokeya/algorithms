/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let minDiff = Infinity, result = null
    
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            
            const newDiff = Math.abs(target - sum)
            if (newDiff <= minDiff) result = sum
            minDiff = Math.min(newDiff, minDiff)
            
            if (sum > target) right--
            else if (sum < target) left++
            else { right--; left++; }
        }
    }
    
    return result
};