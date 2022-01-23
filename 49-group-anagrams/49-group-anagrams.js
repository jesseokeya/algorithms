/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const cache = new Map() 
    for (const str of strs) {
        const sortStr = sorted(str)
        if (!cache.has(sortStr)) {
            cache.set(sortStr, [str])
        } else {
            cache.set(sortStr, cache.get(sortStr).concat(str))
        }
    }
    
    const result = []
    for (const [, v] of cache) result.push(v)
    return result
};

const sorted = (str) => {
    const sorted = str.split("").sort((a, b) => a.localeCompare(b))
    return sorted.join("")
}