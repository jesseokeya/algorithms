/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    const sorted = people.sort((a, b) => a - b)
    let heaviest = sorted.length - 1, lightest = 0, result = 0
    while (heaviest > lightest) {
        if (sorted[heaviest] + sorted[lightest] <= limit) {
            lightest++
        }
        heaviest--
        result++
    }
    
    if (heaviest === lightest) result++
    
    return result
};
