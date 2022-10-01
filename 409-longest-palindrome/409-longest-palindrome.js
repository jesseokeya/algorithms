/**
 * @param {string} s
 * @return {number}
 *
 */
var longestPalindrome = function(s) {
    let count = 0, oddFound = false
    const mappings = createMappings(s)
    
    for (const [, v] of mappings) {
        if (v % 2 === 0) count += v
        else {
            oddFound = true
            count += (v - 1)
        }
    }
    
    if (oddFound) count++
    
    return count
};

const createMappings = (word) => {
    const mappings = new Map()
    
    for (const char of word) {
        if (!mappings.has(char)) mappings.set(char, 1)
        else mappings.set(char, mappings.get(char) + 1)
    }
    
    return mappings
}