/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = grid.map(row => row.map(cell => false))
    const row = grid.length, col = grid[0].length
    
    let numOfIslands = 0
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dfs(grid, i, j, visited)) numOfIslands++
        }
    }
        
    return numOfIslands
};

const dfs = (grid, i, j, visited) => {
    const stack = [[i, j]]
    
    let numOfIslands = 0
    
    while (stack.length) {
        const [i, j] = stack.pop()
        
        if (visited[i][j]) continue
        visited[i][j] = true
        
        if (grid[i][j] === "0") continue
        numOfIslands++
        
        if (i > 0 && !visited[i - 1][j]) stack.push([i - 1, j])
        if (i < grid.length - 1 && !visited[i + 1][j]) stack.push([i + 1, j])
        if (j > 0 && !visited[i][j - 1]) stack.push([i, j - 1])
        if (j < grid[0].length - 1 && !visited[i][j + 1]) stack.push([i, j + 1])
        
    }
    
    return numOfIslands > 0 ? true : false
}