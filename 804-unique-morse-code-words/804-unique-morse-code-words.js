/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const mappings = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."], seen = new Set()
    
    for (const word of words) {
        let morseCode = ''
        for (const char of word) {
            const idx = char.charCodeAt() - 96
            morseCode += mappings[idx - 1]
        }
        if (!seen.has(morseCode)) {
            seen.add(morseCode)
        }
    }
    
    return seen.size
};