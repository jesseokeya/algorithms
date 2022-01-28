/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let result = -Infinity, depth = 0
    for (const char of s) {
        if (char === "(") depth++
        else if (char === ")") depth--
        result = Math.max(result, depth)
    }
    return result
};