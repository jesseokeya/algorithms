/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let result = ""
    
    const mappings = createMappings(s)
    const keys = Object.keys(mappings)
    const sorted = keys.sort((a, b) => mappings[b] - mappings[a])
    
    for (const val of sorted) {
        result += val.repeat(mappings[val])
    }
    
    return result
};

const createMappings = (word) => {
    const mappings = {}
    
    for (const char of word) {
       mappings[char] = mappings[char] + 1 || 1
    }
    
    return mappings
}