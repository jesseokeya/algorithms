/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = []
    const permute = (left, right, prefix) => {
        if (left > right) return
        if (left === 0 && right === 0) results.push(prefix)
        if (left > 0) permute(left - 1, right, prefix + '(')
        if (right > 0) permute(left, right - 1, prefix + ')')
    }
    permute(n, n, '')
    return results
};