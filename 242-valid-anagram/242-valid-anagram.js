/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
        
    const sMap = mappings(s)
    const tMap = mappings(t)
    
    let result = true
    
    for (const [k, v] of sMap) {
        result = result && v === tMap.get(k)
    }
    
    return result
};

const mappings = (str) => {
    const result = new Map()
    
    for (const char of str) {
        if (!result.has(char)) result.set(char, 1)
        else result.set(char, result.get(char) + 1)
    }
    
    return result
}