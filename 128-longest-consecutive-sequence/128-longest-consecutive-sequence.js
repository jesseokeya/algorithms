/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let result = -Infinity
    const set = new Set(nums)
    
    for (const num of set) {
        if (set.has(num - 1)) continue
        
        let currNum = num, count = 1
        while (set.has(currNum + 1)) {
            currNum++
            count++
        }
        
        result = Math.max(result, count)
    }
    if (result === -Infinity) return 0
    return result
};