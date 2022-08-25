/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineMappings = mappings(magazine)
    
    for (const char of ransomNote) {
        if (!magazineMappings.has(char) || magazineMappings.get(char) <= 0) {
            return false
        }
        
        if (magazineMappings.has(char)) {
            magazineMappings.set(char, magazineMappings.get(char) - 1)
        }
    }
    
    return true
};

const mappings = (str) => {
    const result = new Map()
    
    for (const char of str) {
        if (!result.has(char)) result.set(char, 1)
        else result.set(char, result.get(char) + 1)
    }
    
    return result
}