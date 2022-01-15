/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const specialTokens = new Set(["+", "-", "*", "/"])
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b),
    }, stack = []
    for (let i = 0; i < tokens.length; i++) {
        const value = tokens[i], lastElem = stack[stack.length - 1]
        if (!specialTokens.has(value)) stack.push(value)
        else {
            const operation = operations[value]
            const first = parseInt(stack.pop()), second = parseInt(stack.pop())
            stack.push(operation(second, first))
        }
    }
    return stack.pop()
};