/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const stack = []
    for (const char of s) {
        const lastElem = stack[stack.length - 1]
        const num = symbols[char]
        if (!lastElem || num <= lastElem) {
            stack.push(symbols[char])
        } else {
            const diff = symbols[char] - stack.pop()
            stack.push(diff)
        }
    }
    return stack.reduce((acc, val) => acc + val, 0)
};