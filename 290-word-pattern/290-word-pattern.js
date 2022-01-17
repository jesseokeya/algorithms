/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let result = ''
    const mappings = createMappings(pattern, str)
    for (let i = 0; i < pattern.length; i++) {
        result += mappings[pattern.charAt(i)] + " "
    }
    return result.trim() === str
};

const createMappings = (pattern, str) => {
    const mappings = {}, values = []
    const context = str.split(' ')
    const patterns = pattern.split('')
    for (let i = 0; i < patterns.length; i++) {
        if (!mappings[patterns[i]] && !values.includes(context[i])) {
            values.push(context[i])
            mappings[patterns[i]] = context[i]
        }
    }
    return mappings
}