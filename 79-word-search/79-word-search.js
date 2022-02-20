/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word.charAt(0) && dfs(board, i, j, 0, word)) return true
        }
    }
    return false
};

const dfs = (grid, i, j, count, word) => {
    if (count === word.length) return true
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] !== word.charAt(count)) {
        return false
    }
    
    const char = grid[i][j]
    grid[i][j] = "*"
    
    const found = dfs(grid, i - 1, j, count + 1, word) 
        || dfs(grid, i + 1, j, count + 1, word) 
        || dfs(grid, i, j - 1, count + 1, word) 
        || dfs(grid, i, j + 1, count + 1, word) 
    
    grid[i][j] = char
          
    return found
}