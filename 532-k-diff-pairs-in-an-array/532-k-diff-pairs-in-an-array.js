/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0
    const map = new Map()
    
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    }
    
    let result = 0
    for (const [key, value] of map) {
        if (k === 0) {
            if (value >= 2) result++
        } else {
            if (map.has(key + k)) result++
        }
    }
    
    return result
};