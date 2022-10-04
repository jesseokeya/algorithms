/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const walk = (str, words, memo = new Map()) => {
        if (memo.has(str)) return memo.get(str)
        if (str === "") return [[]]
    
        const collection = []
    
        for (const word of words) {
            if (str.startsWith(word)) {
                const suffix = str.slice(word.length)
                const suffixWays = walk(suffix, words, memo)
                memo.set(suffix, suffixWays)
                const targetWays = suffixWays.map(ways => [word, ...ways])
                collection.unshift(...targetWays)
            }
        }
        
        memo.set(str, collection)
        return collection
    }
    
    const results = []
    const combinations = walk(s, wordDict)
    
    for (const combination of combinations) {
        results.push(combination.join(" "))
    }
    
    return results
};