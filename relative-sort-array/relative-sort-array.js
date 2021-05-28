/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const mappings = {}, len = arr2.length
    for (let i = 0; i < len; i++) {
        const value = arr2[i]
        mappings[value] = i + 1
    }
    let maxSize = len, cache = []
    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i]
        if (!mappings.hasOwnProperty(value)) cache.push(value)
    }
    cache = cache.sort((a, b) => a - b)
    for (let i = 0; i < cache.length; i++) {
        const value = cache[i]
        maxSize++
        mappings[value] = maxSize
    }
    return arr1.sort((a, b) => mappings[a] - mappings[b])
};