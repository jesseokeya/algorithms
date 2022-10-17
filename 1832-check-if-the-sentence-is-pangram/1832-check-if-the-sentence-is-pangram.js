/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const limit = 25, letters = new Set()
    for (let i = 0; i <= 25; i++) letters.add(String.fromCharCode(97 + i))
    
    if (sentence.length < limit) return false
    
    let seen = new Set(), countOcurrences = 0
    for (const letter of sentence) {
        if (!seen.has(letter) && letters.has(letter)) countOcurrences++
        seen.add(letter)
    }
    
    console.log(countOcurrences)
    
    return countOcurrences === limit + 1
};