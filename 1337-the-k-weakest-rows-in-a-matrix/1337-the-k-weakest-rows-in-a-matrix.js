/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const mappings = new Map()
    
    for (let i = 0; i < mat.length; i++) {
        mappings.set(i, countOnes(mat[i]))
    }

    const results = Array.from(mappings.keys())
        .sort((a, b) => mappings.get(a) - mappings.get(b))
    
    return results.slice(0, k)
};

const countOnes = (values) => {
    let result = 0
    
    for (const value of values) {
        if (value === 1) result++
    }
    
    return result
}