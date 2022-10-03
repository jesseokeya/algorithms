/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let result = 0
    
    for (let i = 0; i < colors.length; i++) {
        while (colors[i] === colors[i + 1]) {
            if(neededTime[i] < neededTime[i+1]){
                    result += neededTime[i];
                }else{
                    result += neededTime[i+1];
                    // move ith index value to (i+1)th index for comparison
                    // in next iteration
                    neededTime[i+1] = neededTime[i];
                }
            i++
        }
    }
    
    return result
};