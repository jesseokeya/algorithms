/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ""
    const words = s.split(" ").filter(Boolean)
    
    for(let i = words.length - 1; i >= 0; i--) {
        if (i !== 0) {
            result += words[i] + " "
        } else {
            result += words[i]
        }
    }
    
    return result
};