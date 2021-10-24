/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let mappings = {}, split = s.split('')
    for (const char of s) {
        mappings[char] = mappings[char] + 1 || 1
    }
    
    split = split.sort((a, b) => {
        const isSimilar = mappings[b] === mappings[a]
        const diff = mappings[b] - mappings[a]
        return !isSimilar ? diff : a.localeCompare(b)
    })
    
    return split.join('')
};