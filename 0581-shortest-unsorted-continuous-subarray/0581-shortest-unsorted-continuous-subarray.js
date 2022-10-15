/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let low = 0, high = nums.length - 1
    
    // Move low pointer until current number is greater than the next number
    while (low < nums.length && nums[low] <= nums[low + 1]) low++
    
    // Do nothing and return 0 if we reach the end of the array. Means the array is already sorted
    if (low === nums.length - 1) return 0
    
    // Move high pointer from the end until current number is greater than the previous number
    while (high > 0 && nums[high] >= nums[high - 1]) high--
    
    // Find min an max starting from index low to index high
    let min = Infinity, max = -Infinity
    for (let idx = low; idx <= high; idx++) {
        const current = nums[idx]
        min = Math.min(current, min)
        max = Math.max(current, max)
    }
    
    // Decrement low pointer until prev value less than or equal min
    while (low > 0 && nums[low - 1] > min) low--
    
    // Increment high pointer until next value greater than or equal to maz
    while (high < nums.length && nums[high + 1] < max) high++
    
    // return window size
    return high - low + 1
};