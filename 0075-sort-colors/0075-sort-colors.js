/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Time Complexity:  O(n)
 * Space Complecity: O(1)
 *
 */
var sortColors = function(nums) {
    let idx = 0, low = 0, high = nums.length - 1
    
    while (idx <= high) {
        const current = nums[idx]
        if (current === 0) {
            // swap idx and low
            [nums[idx], nums[low]] = [nums[low], nums[idx]]
            idx++
            low++
        } else if (current === 1) {
            idx++
        } else {
            // if current is 2 swap idx and high
            [nums[idx], nums[high]] = [nums[high], nums[idx]]
            high--
        }
    }
    
    return nums
};