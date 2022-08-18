/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const mappings = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        if (!mappings.has(char)) mappings.set(char, [i])
        else mappings.set(char, mappings.get(char).concat(i))
    }
    
    for (const [k, v] of mappings) {
        if (v.length === 1) return v[0]
    }
    
    return -1
};