/**
 * @param {string} s
 * @return {number}
 * i + 1, j - 1
 */
//dp[i][j] -> the length of the longest Palindromic Subsequence in s[i:j] (including i & j)
var longestPalindromeSubseq = function(s) {
    var dp = [];
    for(var i = 0; i < s.length; i++) {
        dp[i] = Array(s.length).fill(0);
    }
    for(var i = s.length - 1; i >= 0; i--) {
        for(var j = i; j < s.length; j++) {
            if(s[i] === s[j]) {
                if(j - i <= 1) {
                    dp[i][j] = j - i + 1;
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][s.length - 1];
};