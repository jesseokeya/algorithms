/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let windowStart = 0, mappings = new Map(), result = -Infinity
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const right = s[windowEnd]
        
        if (mappings.has(right)) {
            windowStart = Math.max(windowStart, mappings.get(right) + 1)
        }
        
        mappings.set(right, windowEnd)
        
        const windowSize = (windowEnd - windowStart) + 1
        result = Math.max(result, windowSize)
    }
    
    if (result === -Infinity) return 0
    
    return result
};