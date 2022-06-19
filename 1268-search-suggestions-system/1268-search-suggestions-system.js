/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let word = ''
    const sorted = products.sort((a, b) => a.localeCompare(b)), results = []
    for (const char of searchWord) {
        word += char
        const reduced = sorted.filter((v) => v.startsWith(word))
        results.push(reduced.slice(0, 3))
    }
    return results
};