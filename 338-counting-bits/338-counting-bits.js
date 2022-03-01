/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const results = Array.from({ length: n + 1 }, (val, idx) => countOnes(idx.toString(2)))
    return results
};

const countOnes = (value) => {
    let count = 0
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "1") count++
    }
    return count
}