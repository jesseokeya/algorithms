/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * [-1,-1][-1,0][-1,1]
 * [0, -1][0, 0][0, 1]
 * [1, -1][1, 0][1, 1]
 */
var gameOfLife = function(board) {
    const row = board.length, col = board[0].length
    const tempBoard = Array.from({ length: row }, () => new Uint8Array(col))
    
    for (let i = 0; i < row; i++) {
         for (let j = 0; j < col; j++) {
             tempBoard[i][j] = setGridValue(board, i, j)
         }
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            board[i][j] = tempBoard[i][j]
        }
    }
    
    return board
};

const isOutOfBounds = (grid, i, j) => {
    return i < 0 || i >= grid.length || j < 0 || j >= grid[0].length
}

const setGridValue = (grid, i, j) => {
    const positions = [[0, -1], [0, 1], [1, -1], [1, 0], [1, 1], [-1,-1], [-1,0], [-1, 1]]
    
    let liveCount = 0
    for (const position of positions) {
        const x = position[0] + i, y = position[1] + j
        if (isOutOfBounds(grid, x, y))  continue
        else if (grid[x][y] === 1) liveCount++
    }
    
    const cell = grid[i][j]
    
    if (cell === 1) {
        if (liveCount < 2 || liveCount > 3) return 0
        else if (liveCount === 2 || liveCount === 3) return 1
    } else if (liveCount === 3) return 1

}