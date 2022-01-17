/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" "), hmap = createMappings(pattern, s, words)
    if (!pattern && !s) return true
    if (words.length !== pattern.length) return false

    let result = true
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const char = hmap.get(word) || ""
        result = result && char === pattern.charAt(i)
    }
    return result
};

const createMappings = (pattern, s, words) => {
    let pointer = 0
    const hmap = new Map(), seen = new Set()
    for (const word of words) {
        const value = pattern.charAt(pointer)
        if (!hmap.has(word) && !seen.has(value)) {
            hmap.set(word, value)
            seen.add(value)
        }
        pointer++
    }
    return hmap
}