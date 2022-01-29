/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = []
    
    const dfs = (left, right, str) => {
        if (left > right) return
        if (!left && !right) results.push(str)
        if (left > 0) dfs(left - 1, right, str + "(")
        if (right > 0) dfs(left, right - 1, str + ")")
    }
    
    dfs(n, n, "")
    
    return results
};