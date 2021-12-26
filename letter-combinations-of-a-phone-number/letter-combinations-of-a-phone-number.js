/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    const mappings = {
        "1": [],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
        "0": []
    }, results = []
    
    const combine = (prefix, idx, index) => {
        if (prefix.length === digits.length) return results.push(prefix)
        
        const char = digits.charAt(idx), values = mappings[char]
        for (let i = 0; i < values.length; i++) {
            const value = values[i]
            combine(prefix + value, idx + 1)
        }
    }
    
    combine("", 0, 0)
    
    return results
};