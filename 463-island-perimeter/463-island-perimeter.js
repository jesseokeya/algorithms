/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const row = grid.length, col = grid[0].length
    
    let result = 0
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                const positions = [[-1, 0], [0, -1], [0, 1], [1, 0]]
                for (const position of positions) {
                    const x = position[0] + i
                    const y = position[1] + j
                    if (isOutofBounds(grid, x, y) || !grid[x][y]) result += 1
                }
            }
        }
    }
    
    return result
};

const isOutofBounds = (grid, x, y) => {
    return x < 0 || x >= grid.length || y < 0 || y >= grid[0].length
}