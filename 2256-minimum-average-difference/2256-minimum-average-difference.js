/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const len = nums.length, averagesMap = new Map()
    let sum = 0, sumBehind = 0, idx = 0, min = Infinity, result = 0
    
    for (let i = len - 1; i >= 0; i--) {
        sumBehind += nums[i]
        averagesMap.set(idx + 1, sumBehind)
        idx++
    }
    
    for (let i = 0; i < len; i++) {
        sum += nums[i]
        
        const size = i + 1, avg = Math.floor(sum / size)
        
        const lastRange = len - i - 1
        const avgLast = Math.floor(averagesMap.get(lastRange) / lastRange) || 0
        
        const diff = Math.abs(avg - avgLast)
        if (diff < min) {
            min = diff
            result = i
        }
    }
    
    return result
    
};