/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let results = [0, 1]
    
    for (let i = 0; i < s.length; i++) {
        const even = getPalindrome(i - 1, i + 1, s)
        const odd = getPalindrome(i - 1, i, s)
        
        const localMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd
        results = results[1] - results[0] > localMax[1] - localMax[0] ? results : localMax
    }
    
    const [start, end] = results
    return s.substring(start, end)
};

const getPalindrome = (left, right, s) => {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) break
        right++
        left--
    }
    
    return [left + 1, right]
}