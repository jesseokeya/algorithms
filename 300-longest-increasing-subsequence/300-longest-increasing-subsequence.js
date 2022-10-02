/**
 * @param {number[]} nums
 * @return {number}
 * nums = [10,9,2,5,3,7,101,18], dp [1, 1, 1, 2, 2, 3, 4, 4]
                            i
                             j
 */
var lengthOfLIS = function(nums) {
    const length = nums.length
    const dp = new Array(length).fill(1)
    
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < i; j++) {
           if(nums[i] > nums[j]) {
               dp[i] = Math.max(dp[i], dp[j]+1) 
           } 
        }
    }
    
    return Math.max(...dp)
};