/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parentheses = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ]), stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i), lastElem = stack[stack.length - 1]
        if (lastElem && parentheses.get(char) === lastElem) stack.pop()
        else stack.push(char)
    }
    return stack.length === 0
};
