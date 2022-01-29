/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let word = "", start = 97, end = 97 + 25
    for (let i = 0; i < s.length; i++) {
       const charCode =  s.charCodeAt(i)
       if (!isNaN(parseInt(s.charAt(i)))) {
           word += s.charAt(i)
           continue
       }
       if (charCode < start || charCode > end) continue
       word += s.charAt(i)
    }
    
    let result = true
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        result = result && word[i] === word[(word.length - i) - 1]
        if (!result) return false
    }
    
    return result
};