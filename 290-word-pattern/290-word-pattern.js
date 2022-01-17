/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let pointer = 0, result = true
    if (!pattern && !s) return true
    const words = s.split(" "), hmap = new Map(), seen = new Set()
    if (words.length !== pattern.length) return false
    for (const word of words) {
        const value = pattern.charAt(pointer)
        if (!hmap.has(word) && !seen.has(value)) {
            hmap.set(word, value)
            seen.add(value)
        }
        pointer++
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const char = hmap.get(word) || ""
        result = result && char === pattern.charAt(i)
    }
    return result
};