/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const cache = {}, joined = arr.join('')
​
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i]
        cache[piece[0]] = piece
    }
    
    let context = '', idx = 0
    
    while (idx < arr.length) {
        const value = arr[idx], piece = cache[value]
        if (!piece) return false
        context += piece.join('')
        idx += piece.length
    }
    
    return context === joined
};
