/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = new Set(['+', '-', '*', '/'])
    const operations = new Map([
        ['+', (a, b) => a + b],
        ['-', (a, b) => a - b],
        ['*', (a, b) => a * b],
        ['/', (a, b) => Math.trunc(a / b)],
    ]), stack = []
    
    for (const token of tokens) {
        if (!operators.has(token)) {
            stack.push(parseInt(token))
        } else {
            const operation = operations.get(token)
            const prev = stack.pop(), value = stack.pop()
            console.log({ prev, value, token })
            stack.push(operation(value, prev))
        }
    }
    
    return stack.pop()
};