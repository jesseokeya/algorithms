/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const row = image.length, col = image[0].length
    const targetColor = image[sr][sc] 
    
    const dfs = (image, sr, sc, color) => {
        if (sr < 0 || sr >= row || sc < 0 || sc >= col) return 

        const cell = image[sr][sc]
        if (cell !== targetColor || cell === color) return

        image[sr][sc] = color

        const positions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        for (const position of positions)  dfs(image, position[0] + sr, position[1] + sc, color)
    }
    
    dfs(image, sr, sc, color)
    
    return image
};