/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let result = 0
    
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === colors[i - 1]) {
            result += Math.min(neededTime[i], neededTime[i - 1]) 
            neededTime[i] = Math.max(neededTime[i], neededTime[i - 1])
        }
    }
    
    return result
};