/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = -Infinity
    for (const account of accounts) {
        const reduced = account.reduce((acc, val) => acc + val, 0)
        max = Math.max(max, reduced)
    }
    return max
};