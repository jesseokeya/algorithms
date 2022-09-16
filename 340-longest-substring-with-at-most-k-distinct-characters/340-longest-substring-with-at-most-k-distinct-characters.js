/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let windowStart = 0, mappings = new Map(), result = 0
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const right = s[windowEnd]
        if (!mappings.has(right)) mappings.set(right, 0)
        mappings.set(right, mappings.get(right) + 1)
        
        while (mappings.size > k) {
            const left = s[windowStart]
            mappings.set(left, mappings.get(left) - 1)
            if (mappings.get(left) === 0) mappings.delete(left)
            windowStart++
        }
        
        const windowSize = (windowEnd - windowStart) + 1
        result = Math.max(result, windowSize)
    }
    
    return result
};