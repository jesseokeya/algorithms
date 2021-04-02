/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const numbers = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
    const results = new Set()
    
    for (let i = 0; i < word.length; i++) {
        let index = i, value = ''
        
        while (numbers.has(word.charAt(index))) {
            value += word.charAt(index)
            index++
        }
        
        if (value.length > 0) { 
            results.add(Number(value))
            i = index
        }
    }
    
    return results.size
};