/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const len = nums.length
    let leftSum = 0, min = Infinity, result = 0
    let rightSum = nums.reduce((acc, val) => acc + val)
    
    for (let i = 0; i < len; i++) {
        leftSum += nums[i]
        rightSum -= nums[i]
        
        const leftAvg = Math.floor(leftSum / (i + 1))
        const rightAvg = Math.floor(rightSum / (len - i - 1) || 0) 
        
        const diff = Math.abs(leftAvg - rightAvg)
        if (diff < min) {
            min = diff
            result = i
        }
    }
    
    return result
};