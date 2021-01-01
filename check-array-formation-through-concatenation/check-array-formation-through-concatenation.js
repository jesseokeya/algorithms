/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const reference = {}
    
    for (const piece of pieces) {
        let first = piece[0]
        reference[first] = piece
    }
    
    let collect = [], idx = 0
    
    while (idx < arr.length) {
        const val = arr[idx]
        const piece = reference[val]
        
        if (!piece) return false
        
        collect.push(...piece)
        
        idx += piece.length
    }
    
    return collect.join() === arr.join()
};
