/**
 * @param {string} s
 * @return {number}
 
 * case 1 = abc | cba, case = abc d cba 
 */
var longestPalindrome = function(s) {
    let count = 0, mappings = frequencyCount(s), foundOdd = false
    
    for (const [key, value] of mappings) {
        if (value % 2 === 0) count += value
        else if (value % 2 !== 0) {
            count += (value - 1)
            foundOdd = true
        }
    }
    
    if (foundOdd) count++
    
    return count
};

const frequencyCount = (s) => {
    const mappings = new Map()
    
    for (const char of s) {
        if (!mappings.has(char)) mappings.set(char, 1)
        else mappings.set(char, mappings.get(char) + 1)
    }
    
    return mappings
}