/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = []
    const dfs = (l, r, s) => {
        if (l > r) return 
        if (l === n && r === n) return results.push(s)
        if (l < n) dfs(l + 1, r, s + ")")
        if (r < n) dfs(l, r + 1, s + "(")
    }
    
    dfs(0, 0, "")
    
    return results     
};