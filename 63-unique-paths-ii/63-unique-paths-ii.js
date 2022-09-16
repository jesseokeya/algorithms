/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const row = obstacleGrid.length, col = obstacleGrid[0].length
    const dp = Array.from({ length: row }, () => new Uint32Array(col))
    
    for (let i = 0; i < obstacleGrid.length; i++) {
         for (let j = 0; j < obstacleGrid[i].length; j++) {
             const cell = obstacleGrid[i][j]
             if (cell === 0) {
                 if (i > 0) dp[i][j] += dp[i - 1][j]
                 if (j > 0) dp[i][j] += dp[i][j - 1]
                 if (i === 0 && j === 0) dp[i][j] = 1
             }
         }
    }
    
    return dp[row - 1][col - 1]
};