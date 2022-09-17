/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    const dfs = (str) => {
        if (str.length < 2) return ''
        const seen = new Set()
        for (const char of str) seen.add(char)
        
        for (let i = 0; i < str.length; i++) {
            const val = str[i]
            if (seen.has(val.toUpperCase()) && seen.has(val.toLowerCase())) continue
                
            const left = dfs(str.substring(0, i))
            const right = dfs(str.substring(i + 1))
            
            return left.length >= right.length ? left : right
        }
        
        return str
    }
    
   return dfs(s)
};