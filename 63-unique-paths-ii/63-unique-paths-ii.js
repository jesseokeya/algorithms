/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const explore = (i, j, memo) => {
        const key = `${i}.${j}`
        if (memo.has(key)) return memo.get(key)
        
        if (i < 0 || i >= obstacleGrid.length 
            || j < 0 || j >= obstacleGrid[0].length 
            || obstacleGrid[i][j] === 1) return 0
        
        else if (i === obstacleGrid.length - 1 && j === obstacleGrid[0].length - 1) return 1
        
        memo.set(key, explore(i + 1, j, memo) + explore(i, j + 1, memo))
        return memo.get(key)
        
    }
    
    return explore(0, 0, new Map())
};