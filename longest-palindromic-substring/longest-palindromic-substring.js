/**
 * @param {string} s
 * @return {string}
 */
// 2D DP
var longestPalindrome = function(s) {
    
    if(s.length <= 1) return s;
    
    // construct a 2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
    
    let lps = '';
    
    // base case for one character
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }
    
    // base case for two characters
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) dp[i][i+1] = true;
        if(dp[i][i+1]) lps = s.substring(i, i + 2);
    }
​
    // expand to three or more characters
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    
    return lps;
}
​
