/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return []
    const combos = new Map([
        ["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        [ "9", ["w", "x", "y", "z"]]
    ])
    const results = []
    
    const combine = (prefix, idx) => {
        if (prefix.length === digits.length) return results.push(prefix)
        const digit = digits.charAt(idx)
        const values = combos.get(digit)
        for (let i = 0; i < values.length; i++) {
            const value = values[i]
            combine(prefix + value, idx + 1)
        }
    }
    
    combine("", 0)
    
    return results
};