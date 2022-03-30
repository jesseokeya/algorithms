/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) return false
    
    const totalRows = matrix.length
    const totalColumns = matrix[0].length
    
    let left = 0;
    let right = (totalRows * totalColumns) - 1
    
    while (left <= right) {
        const middle = Math.trunc(left + (right - left) / 2)
        
        const row = Math.trunc(middle / totalColumns)
        const col = Math.trunc(middle % totalColumns)
       
        const middleValue = matrix[row][col]
        
        if (middleValue === target) { 
            return true 
        } else if (middleValue < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    
    return false
};