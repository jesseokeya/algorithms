/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let windowStart = 0, result = -Infinity, hmap = new Map()
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const right = s[windowEnd]
        if (hmap.has(right)) {
            windowStart = Math.max(windowStart, hmap.get(right) + 1)
        }
        
        hmap.set(right, windowEnd)
        const windowSize = (windowEnd - windowStart) + 1
        result = Math.max(result, windowSize)
    }
    
    if (result === -Infinity) return 0
    
    return result
};