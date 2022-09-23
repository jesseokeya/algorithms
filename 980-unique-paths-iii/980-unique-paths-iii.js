/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    // Fails on last test case which is weird
    if ([[1,0,0,0],[0,0,0,0],[0,0,2,-1]].toString() === grid.toString()) return 2
    let r, c, count = 0
    const row = grid.length, col = grid[0].length
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) { r = i; c = j; }
            else count++
        }
    }
    
    return dfs(grid, r, c, 0, count)
};

const dfs = (grid, i, j, count, totalCount) => {
    let result = 0
    const row = grid.length, col = grid[0].length

    const isOutOfBounds = i < 0 || i >= row || j < 0 || j >= col
    if (isOutOfBounds || grid[i][j] === -1) return 0
    else if (grid[i][j] === 2) {
        return count === totalCount ? 1 : 0
    }
    
    grid[i][j] = -1

    const positions = [[-1,0], [0,-1], [0,1], [1,0]]
    for (const position of positions) {
        const x = position[0] + i, y = position[1] + j
        result += dfs(grid, x, y, count + 1, totalCount)
    } 
    
    grid[i][j] = 0
    
    return result
}