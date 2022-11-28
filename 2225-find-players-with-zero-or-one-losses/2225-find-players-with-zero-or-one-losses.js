/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    matches = matches.sort((a, b) => a[0] - b[0])
    const winners = new Map(), losers = new Map()
    
    for (const [winner, loser] of matches) {
        if (!winners.has(winner)) winners.set(winner, 1)
        else winners.set(winner, winners.get(winner) + 1)
        
        if (!losers.has(loser)) losers.set(loser, 1)
        else losers.set(loser, losers.get(loser) + 1)
    }
    
    const listOfWinners = [], listOfLosers = []
    for (const [k, v] of winners) {
        if (!losers.has(k)) listOfWinners.push(k)
    }
    
    for (const [k, v] of losers) {
        if (v === 1) listOfLosers.push(k)
    }
    
    
    return [listOfWinners, listOfLosers.sort((a, b) => a - b)]
};