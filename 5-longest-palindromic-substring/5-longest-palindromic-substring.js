/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = [0, 1]
    
    for (let i = 0; i < s.length; i++) {
        const even = getPalindrome(i - 1, i, s), odd = getPalindrome(i - 1, i + 1, s)
        
        const localMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd
        result = result[1] - result[0] > localMax[1] - localMax[0] ? result : localMax
    }
    
    return s.slice(result[0], result[1])
};

const getPalindrome = (left, right, s) => {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) break
        left--
        right++
    }
    
    return [left + 1, right]
}