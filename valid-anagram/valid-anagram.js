/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const first = getFrequency(s)
    const second = getFrequency(t)
    
    let result = true

    for (const key in first) {
        result = result && second[key] === first[key]
    }
    
    return result
};

const getFrequency = (str) => {
    const result = {}
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i)
        result[char] = result[char] + 1 || 1
    }
    return result
}