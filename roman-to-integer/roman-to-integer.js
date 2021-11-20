/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mappings = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const value = mappings.get(s.charAt(i))
        const lastElem = stack[stack.length - 1]
        if (!lastElem || lastElem >= value) {
            stack.push(value)
        } else {
            stack.push(value - stack.pop())
        }
    }
    
    let result = 0
    for (const s of stack) result += s
    
    return result
};