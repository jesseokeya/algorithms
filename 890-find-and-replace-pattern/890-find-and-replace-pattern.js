/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const results = [], wordMappings = words.map(mappings)
    const template = mappings(pattern)
    for (let i = 0; i < wordMappings.length; i++) {
        const wordMapping = wordMappings[i]
        if (compare(wordMapping, template)) results.push(words[i])
    }
    return results
};

const flatten = (mapping) => {
    let result = ""
    for (const [, v] of mapping) result += v
    return result
}

const compare = (firstMap, secondMap) => {
    if (firstMap.size !== secondMap.size) return false
    return flatten(firstMap) === flatten(secondMap)
}

const mappings = (str) => {
    const result = new Map()
    let count = 0
    for (const char of str) {
        if (!result.has(char)) result.set(char, count)
        else result.set(char, count + 1)
        count++
    }
    return result
}