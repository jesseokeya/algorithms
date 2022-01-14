/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const valid = new Set([
        '.', 
        '-', 
        '+', 
        '0', 
        '1',  
        '2', 
        '3',  
        '4', 
        '5', 
        '6', 
        '7', 
        '8', 
        '9'
    ])
    let sanitized = ''
    for (const char of s) {
        if (valid.has(char)) sanitized += char
        if (!valid.has(char) && char !== " " && sanitized.length === 0) return 0
        if (!valid.has(char) && char !== " " && sanitized.length > 0) break
        if (char === " " && sanitized.length > 0) break
    }
    let result = parseInt(sanitized)
    result = Number.isNaN(result) ? 0 : result
    const upperBound = Math.pow(2, 31) - 1, lowerBound = Math.pow(-2, 31)
    if (result <= lowerBound) return lowerBound
    if (result >= upperBound) return upperBound
    return result
};