/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqMap = {}
    for (const char of s) {
        freqMap[char] = freqMap[char] + 1 || 1
    }
    const sorted = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a])
    
    let result = ''
    for (const char of sorted) {
        result += char.repeat(freqMap[char])
    }
    
    return result
};