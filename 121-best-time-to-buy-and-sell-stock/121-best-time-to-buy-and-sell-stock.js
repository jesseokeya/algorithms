/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, runningMin = Infinity
    
    for (let i = 0; i < prices.length; i++) {
        const value = prices[i]
        runningMin = Math.min(runningMin, value)
        profit = Math.max(profit, value - runningMin)
    }
        
    return profit
};