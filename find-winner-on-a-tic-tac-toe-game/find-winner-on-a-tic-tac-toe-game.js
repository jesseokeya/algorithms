/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const board = [['', '', ''], ['', '', ''], ['', '', '']]
    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i]
        board[row][col] = i % 2 === 0 ? 'X' : 'O'
        const result = findWinner(board, 3)
        if (result !== 'Pending') return result
    }
    for (const b of board) {
        if (b.includes('')) return "Pending"
    }
    
    return "Draw"
};

const findWinner = (board, size) => {
    const winner = new Map([
        ['X', 'A'],
        ['O', 'B']
    ])
    const winningMoves = [
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ]
    
    for (const winningMove of winningMoves) {
        let isSmiliar = true, char = ''
        for (let i = 1; i < winningMove.length; i++) {
            const [r, c] = winningMove[i]
            const [row, col] = winningMove[i - 1]
            isSmiliar = isSmiliar && board[r][c] && board[row][col] && board[r][c] === board[row][col]
            char = board[r][c]
        }
       if (isSmiliar) return winner.get(char)
    }
    return "Pending"
}