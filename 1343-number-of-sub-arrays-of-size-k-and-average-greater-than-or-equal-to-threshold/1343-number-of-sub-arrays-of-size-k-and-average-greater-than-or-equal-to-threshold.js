/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let windowStart = 0, windowSum = 0, result = 0
        
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        
        if (windowEnd >= k - 1) {
            const windowSize = (windowEnd - windowStart) + 1
            const average = windowSum / windowSize
            if (average >= threshold) result++
            windowSum -= arr[windowStart]
            windowStart++
        }
    }
    
    return result
};