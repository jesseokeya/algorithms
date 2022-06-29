/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const result = []
    const sorted = people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
    for (const [h, k] of sorted) {
        if (!result[k]) result[k] = [h, k]
        else result.splice(k, 0, [h, k])
    }
    
    return result
};