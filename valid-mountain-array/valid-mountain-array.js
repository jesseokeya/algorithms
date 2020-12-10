/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (!arr || arr.length <= 2) return false
    let i = 0, end = arr.length
    while (i + 1 && arr[i] < arr[i + 1]) i++
    if (i == 0 || i === end - 1) return false
    while (i + 1 && arr[i] > arr[i + 1]) i++
    return i === end - 1
}; 
