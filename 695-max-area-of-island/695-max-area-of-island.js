/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = -Infinity
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            max = Math.max(max, dfs(grid, i, j))
        }
    }
    
    return max
};

const dfs = (grid, i, j) => {
    let islands = 0
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
        return 0
    }
    
    grid[i][j] = 0
    
    islands++
    
    islands += dfs(grid, i - 1, j)
    islands += dfs(grid, i + 1, j)
    islands += dfs(grid, i, j - 1)
    islands += dfs(grid, i, j + 1)
    
    
    return islands
}