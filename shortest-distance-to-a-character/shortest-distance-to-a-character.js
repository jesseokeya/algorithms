/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const indices = calcDistance(s, c), results = []
    for (let i = 0; i < s.length; i++) {
        let index = i + 1, diff = Number.MAX_VALUE
        for (let j = 0; j < indices.length; j++) {
            const target = indices[j]
            if (index === target) { results.push(0); break }
            else {
                diff = Math.min(diff, Math.abs(target - index))
            }
            if (j == indices.length - 1) results.push(diff)
        }
    }
    return results
};

const calcDistance = (s, c) => {
    const result = []
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === c) result.push(i + 1)
    } 
    return result
}