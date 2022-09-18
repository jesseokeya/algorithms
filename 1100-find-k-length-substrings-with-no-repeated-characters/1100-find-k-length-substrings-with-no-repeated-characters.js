/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    let windowStart = 0, result = 0, windowSubstr = ''
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        windowSubstr += s[windowEnd]
        
        if (windowEnd >= k) {
            windowSubstr = windowSubstr.substr(1, windowEnd)
            windowStart++
        }
        
        if (windowSubstr.length === k && new Set(windowSubstr).size === windowSubstr.length) {
            result++
        }
    }
    
    return result
};