/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let result = 0
    const row = grid.length, col = grid[0].length
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) result += countSides(grid, i, j)
        }
    }
    
    return result
};

const countSides = (grid, i, j) => {
    let result = 0
    const row = grid.length, col = grid[0].length
    const positions = [[-1, 0], [0, -1], [0, 1], [1, 0]]
    
    for (const position of positions) {
        const x = position[0] + i, y = position[1] + j
        const isOutofBounds = x < 0 || x >= row || y < 0 || y >= col
        
        if (isOutofBounds || !grid[x][y]) result += 1
    }
    
    return result
}