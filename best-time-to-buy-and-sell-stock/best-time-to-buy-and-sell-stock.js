/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE, profit = 0
    for (let i = 0; i < prices.length; i++) {
        const val = prices[i]
        min = Math.min(min, val)
        profit = Math.max(profit, val - min)
    }
    return profit
};