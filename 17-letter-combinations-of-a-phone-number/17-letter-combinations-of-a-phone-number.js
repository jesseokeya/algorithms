/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return []
    const combos = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }, results = []
    
    const combine = (prefix, idx) => {
        if (prefix.length === digits.length) return results.push(prefix) 
        const values = combos[digits[idx + 1]]
        for (let i = 0; i < values.length; i++) {
            combine(prefix + values[i], idx + 1)
        }
    }
    
    combine("", -1)
    
    return results
};