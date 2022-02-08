/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numOfIslands = 0
    for (let i = 0; i < grid.length; i++) {
       for (let j = 0; j < grid[i].length; j++) {
           numOfIslands += dfs(grid, i, j)
       } 
    }
    return numOfIslands
};

const dfs = (grid, i, j) => {
    let islands = 0
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") {
        return 0
    }
    
    grid[i][j] = "0"
    
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
    
    return 1
}