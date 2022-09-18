/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    let windowStart = 0, windowSum = 0, result = 0
    for (let windowEnd = 0; windowEnd < calories.length; windowEnd++) {
        windowSum += calories[windowEnd]
        
        if (windowEnd >= k - 1) {
            if (windowSum < lower) result--
            else if (windowSum > upper) result++
                
            windowSum -= calories[windowStart]
            windowStart++
        }
    }
    
    return result
};