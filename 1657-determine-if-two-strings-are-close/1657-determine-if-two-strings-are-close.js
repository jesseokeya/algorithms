/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false
        
    const length = 26
    const word1Array = new Array(length).fill(0)
    const word2Array = new Array(length).fill(0)
    const offset = "a".charCodeAt(0), seen = new Set()
    
    for (const char of word1) {
        word1Array[char.charCodeAt(0) - offset]++
        seen.add(char)
    }
    
    for (const char of word2) {
        word2Array[char.charCodeAt(0) - offset]++
        if (!seen.has(char)) return false
    }

    word1Array.sort(wordCompare)
    word2Array.sort(wordCompare)
    
    for (let i = 0; i < length; i++) {
        if (word1Array[i] !== word2Array[i]) return false
    }

    return true
};

const wordCompare = (a, b) => b - a