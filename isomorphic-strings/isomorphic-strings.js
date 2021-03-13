/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (new Set(s).size !== new Set(t).size) return false
    
    const sMap = new Map(), tMap = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const sChar = s.charAt(i), tChar = t.charAt(i)
        
        if (sMap.get(sChar) !== tMap.get(tChar)) return false
        
        sMap.set(sChar, i + 1)
        tMap.set(tChar, i + 1)
    }
    return true
};