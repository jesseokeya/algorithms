/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const row = grid.length, col = grid[0].length
    
    let result = 0
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const cell = grid[i][j]
            if (cell === 1) result += dfs(grid, i, j)
        }
    }
    
    return result
};


const isOutofBounds = (grid, x, y) => {
    const row = grid.length, col = grid[0].length
    
    return x < 0 || x >= row || y < 0 || y >= col
}

const dfs = (grid, i, j, seen = new Set()) => {
    const key = `${i}${j}`
    
    // Base case 1: out of bounds
    if (isOutofBounds(grid, i, j) || seen.has(key)) return 0
    seen.add(key)
    
    const positions = [[-1, 0], [0, -1], [0, 1], [1, 0]]
    
    let perimeter = 0
    
    for (const position of positions) {
        const x = position[0] + i, y = position[1] + j
        if (isOutofBounds(grid, x, y) || grid[x][y] === 0) perimeter += 1
    }
    
    return perimeter
}