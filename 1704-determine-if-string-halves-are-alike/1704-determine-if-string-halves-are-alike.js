/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const mid = s.length / 2
    
    const a = s.substring(0, mid)
    const b = s.substring(mid)
    
    return countVowels(a) === countVowels(b)
};

const countVowels = (str) => {
    let result = 0
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    
    for (const char of str) {
        if (vowels.has(char)) result++
    }
    
    return result
}