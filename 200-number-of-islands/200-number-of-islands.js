/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = grid.map(row => row.map(cell => false))
    let islands = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (dfs(grid, i, j, visited)) islands++
        }
    }
    
    return islands
};

const dfs = (grid, i, j, visited) => {
    const stack = [[i, j]]
    let foundIslands = 0
    
    while (stack.length) {
        const [r, c] = stack.pop()
        
        if (visited[r][c]) continue
        visited[r][c] = true
        
        if (grid[r][c] === "0") continue
        foundIslands++
        
        if (r > 0 && !visited[r - 1][c]) stack.push([r - 1, c])
        if (r < grid.length - 1 && !visited[r + 1][c]) stack.push([r + 1, c])
        
        if (c > 0 && !visited[r][c - 1]) stack.push([r, c - 1])
        if (c < grid[0].length - 1 && !visited[r][c + 1]) stack.push([r, c + 1])
        
    }
    
    return foundIslands > 0
}