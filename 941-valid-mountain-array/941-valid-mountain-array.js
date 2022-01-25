/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false
    
    let i = 0, j = arr.length - 1
    while (arr[i] < arr[i + 1]) i++
    while (arr[j] < arr[j - 1]) j--
    
    return i === j && i !== 0 && j !== arr.length - 1
};