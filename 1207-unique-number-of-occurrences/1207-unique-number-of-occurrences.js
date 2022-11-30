/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const occurrences = new Map()
    
    for (const val of arr) {
        if (!occurrences.has(val)) occurrences.set(val, 1)
        else occurrences.set(val, occurrences.get(val) + 1)
    }
    
    const uniqueOccurrences = new Set()
    for (const [, val] of occurrences) {
        if (uniqueOccurrences.has(val)) return false
        uniqueOccurrences.add(val)
    }
    
    return true
};