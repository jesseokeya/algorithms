/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const row = text1.length, col = text2.length
    const dp = Array.from({ length: row + 1 }, () => new Uint16Array(col + 1))
    
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] += 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] += Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[row][col]
};