/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = [0, 1]
    
    for (let i = 0; i < s.length; i++) {
        const even = getPalindrome(i - 1, i, s)
        const odd = getPalindrome(i - 1, i + 1, s)
        
        const localMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd
        max = max[1] - max[0] > localMax[1] - localMax[0] ? max : localMax
    }
    
    return s.slice(max[0], max[1])
};

const getPalindrome = (left, right, str) => {
    while (left >= 0 && right < str.length) {
        if (str[left] !== str[right]) break
        left--
        right++
    }
    
    return [left + 1, right]
}