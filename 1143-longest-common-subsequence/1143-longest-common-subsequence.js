/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1 === text2) return text1.length
    const lcs = (i, j, memo) => {
        const key = `${i},${j}`
        if (memo.has(key)) return memo.get(key)
        if (i >= text1.length || j >= text2.length) return 0
        else if (text1[i] === text2[j]) { 
            const result = 1 + lcs(i + 1, j + 1, memo)
            memo.set(key, result)
            return result
        }
        const result = Math.max(lcs(i + 1, j, memo), lcs(i, j + 1, memo))
        memo.set(key, result)
        return result
    }
    return lcs(0, 0, new Map()) 
};