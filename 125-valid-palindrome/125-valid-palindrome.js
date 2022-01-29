/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let word = "", start = 97, end = 97 + 25
    for (let i = 0; i < s.length; i++) {
       const charCode =  s.charCodeAt(i), char = s.charAt(i)
       if (!isNaN(parseInt(char))) {
           word += char
           continue
       }
       if (charCode < start || charCode > end) continue
       word += char
    }
    
    let result = true
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        result = result && word[i] === word[(word.length - i) - 1]
        if (!result) return false
    }
    
    return result
};