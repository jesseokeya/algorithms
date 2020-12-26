/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const helper = (data, k, memo) => {
        if (k === 0) return 1
        const idx = data.length - k
        
        if (data[idx] === '0') return 0
        if (memo.has(k)) return memo.get(k)
        
        let result = helper(data, k - 1, memo)
        
        const isAlphabetical = Number(data.substring(idx, idx + 2)) <= 26
        if (k >= 2 && isAlphabetical) result += helper(data, k - 2, memo)
        
        memo.set(k, result)
        return result
    }
    
    return helper(s, s.length, new Map())
};
