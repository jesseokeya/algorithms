/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let complement = ''
    const binary = n.toString(2)
    
    for (const value of binary) {
        complement += value ^ 1
    }
    
    return parseInt(complement, 2)
};