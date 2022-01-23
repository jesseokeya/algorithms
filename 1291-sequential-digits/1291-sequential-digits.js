/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let results = []
    for (let i = 1; i <= 9; i++) {
        let num = i
        while (num <= high && num % 10 !== 0) {
            if (num >= low) results.push(num)
            num = (num * 10) + (num % 10) + 1
        }
    }
    return results.sort((a, b) => a - b)
};