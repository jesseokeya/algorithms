/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const sMap = createMapping(s), tMap = createMapping(t)
    let result = true
    for (const [k, v] of sMap) {
        if (!tMap.has(k)) return false
        result = result && tMap.get(k) === v
    }
    return result
};

const createMapping = (word) => {
    const results = new Map()
    for (const char of word) {
        if (!results.has(char)) {
            results.set(char, 1)
        } else {
            results.set(char, results.get(char) + 1)
        }
    }
    return results
}