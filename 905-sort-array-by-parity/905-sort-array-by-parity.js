/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let left = 0, right = A.length - 1
    while (left < right) {
        while (A[left] % 2 === 0 && left < right) left++
        while (A[right] % 2 !== 0 && left < right) right--
        [A[left], A[right]] = [A[right], A[left]]
    }
    return A
};