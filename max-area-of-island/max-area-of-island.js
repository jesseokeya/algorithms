/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = -Infinity
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            max = Math.max(max, helper(i, j, grid))
        }
    }
    return max
};

const helper = (i, j, grid) => {
    let count = 0
    
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
        return 0
    }
    
    grid[i][j] = 0
    
    count++
    
    count += helper(i + 1, j, grid)
    count += helper(i - 1, j, grid)
    count += helper(i, j + 1, grid)
    count += helper(i, j - 1, grid)
    
    return count
}