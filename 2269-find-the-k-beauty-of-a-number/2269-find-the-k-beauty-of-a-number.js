/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let windowStart = 0, result = 0, windowStr = ''
    
    const n = num.toString()
    for (let windowEnd = 0; windowEnd < n.length; windowEnd++) {
        windowStr += n[windowEnd]
        
        if (windowEnd >= k - 1) {
            if (num % Number(windowStr) === 0) result++
            windowStr = windowStr.substr(1, windowStr.length)
            windowStart++
        }
    }
    
    return result
};