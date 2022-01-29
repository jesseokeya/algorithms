/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = new Map([
        ["}", "{"],
        ["]", "["],
        [")", "("]
    ]), stack = []
    
    for (const char of s) {
        const lastElem = stack[stack.length - 1]
        if (!lastElem || brackets.get(char) !== lastElem) stack.push(char)
        else stack.pop()
    }
    console.log(stack)
    return stack.length === 0
};