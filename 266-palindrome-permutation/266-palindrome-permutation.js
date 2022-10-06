/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let len = s.length, count = 0, foundOdd = false
    const mappings = frequencyCount(s)
    
    for (const [, value] of mappings) {
        if (value % 2 === 0) count += value
        else {
            foundOdd = true
            count += (value - 1)
        }
    }
    
    
    if (foundOdd) count++
    
    return len === count
};

const frequencyCount = (s) => {
    const mappings = new Map()
    
    for (const char of s) {
        if (!mappings.has(char)) mappings.set(char, 1)
        else mappings.set(char, mappings.get(char) + 1)
    }
    
    return mappings
}