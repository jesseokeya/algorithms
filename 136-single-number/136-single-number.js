/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numbers = new Map()
    
    for (const num of nums) {
        if (!numbers.has(num)) {
            numbers.set(num, 1)
        } else {
            numbers.set(num, numbers.get(num) + 1)
        }
    }
    
    for (const [k, v] of numbers) {
        if (v === 1) return k
    }
    
    return -1
};